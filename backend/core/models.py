from django.db import models
from django.contrib.auth.models import User
from django.db.models.query import QuerySet
from django_countries.fields import CountryField



class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    
    @classmethod
    def get_default(cls):
        category, created = cls.objects.get_or_create(name = "Sin Categoría")
        return category.pk
        
    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name
        
class ProductManager(models.Manager):
    '''
        Manager de productos para filtrar por productos activos
    '''
    def get_queryset(self):
        return super().get_queryset().filter(active=True)
        

class Product(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField(blank = True, default=0)
    category = models.ForeignKey('Category', on_delete=models.SET_DEFAULT, default=Category.get_default(), null=True, blank=True, related_name='product')
    discount = models.ForeignKey('Discount', on_delete=models.SET_NULL, null=True, blank=True, related_name='product_discount')
    active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ProductManager() #Sobreescribo el manager por defecto (models.Manager())
    def soft_delete(self):
        self.active = False
        self.save()

    def __str__(self) -> str:
        return f"{self.name} - ${self.price}"
        
class Images(models.Model):
    path = models.ImageField(upload_to = 'products')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='image')
    
    def delete(self):
        self.path.storage.delete(self.path.name)
        super().delete()

class Discount(models.Model):
    discount = models.DecimalField(max_digits=10, decimal_places=3)

    
class Coupon(models.Model):
    discount = models.DecimalField(max_digits=10, decimal_places=3)
    code = models.CharField(max_length=45, unique=True)
    status = models.BooleanField()

class ShippingAddress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=100, unique=True)
    country = CountryField(default='AR', blank=False, null=False, verbose_name='pais')
    city = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=20)
    

class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    subtotal = models.DecimalField(max_digits=10, decimal_places=2, blank=True)
    order = models.ForeignKey('Order', on_delete=models.CASCADE, related_name='order_items')


    def save(self, *args, **kwargs):
        self.subtotal = self.quantity * self.product.price
        return super().save(*args, **kwargs)
    
    
class Order(models.Model):
    class StatusChoices(models.TextChoices):
        PENDING_APROVAL = 'P', 'Pendiente de aprobación'
        APROVED = 'A', 'Pago aprobado'
        SHIPPED = 'S', 'Enviado'
        DELIVERED = 'D', 'Entregado'

    status = models.CharField(max_length=1, choices=StatusChoices.choices, default='P', blank=True)
    shipping_info = models.ForeignKey(ShippingAddress, on_delete=models.SET_NULL, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
    total = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    coupon = models.ForeignKey(Coupon, on_delete=models.SET_NULL, null=True, blank=True, related_name='orders')
    created_at = models.DateTimeField(auto_now_add=True)
    


class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    
    @property
    def total(self):
        total = 0
        for item in self.items.all():
            total += item.subtotal
        return total
    
        
class CartItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    subtotal = models.DecimalField(max_digits=10, decimal_places=2, blank=True)
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='cart_items')


    def save(self, *args, **kwargs):
        self.subtotal = self.quantity * self.product.price * (1 -  self.product.discount.discount)
        return super().save(*args, **kwargs)