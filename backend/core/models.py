from django.db import models
from django.contrib.auth.models import User
from django_countries.fields import CountryField

class ShippingAddress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=100)
    country = CountryField(default='AR', blank=False, null=False, verbose_name='país')
    city = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=20)


class Product(models.Model):
    name = models.CharField(max_length=100, unique=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField(blank = True, default=0)
    discount = models.ForeignKey('Discount', on_delete=models.SET_NULL, null=True, blank=True, related_name='product')
    active = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def delete(self):
        self.active = False
        
class Images(models.Model):
    path = models.ImageField(upload_to = 'products')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)


class Category(models.Model):
    name = models.CharField(max_length=100)
    class Meta:
        verbose_name_plural = 'Categories'
        

class Discount(models.Model):
    discount = models.DecimalField(max_digits=10, decimal_places=3)

    
class Coupon(models.Model):
    discount = models.DecimalField(max_digits=10, decimal_places=3)
    code = models.CharField(max_length=45, unique=True)
    status = models.BooleanField()


class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    subtotal = models.DecimalField(max_digits=10, decimal_places=2, blank=True)
    order = models.ForeignKey('Order', on_delete=models.CASCADE, related_name='items')


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
    created_at = models.DateTimeField(auto_now_add=True)



        

class Cart(models.Model):
    pass
    
    



    
class CartItem(models.Model):
    pass
