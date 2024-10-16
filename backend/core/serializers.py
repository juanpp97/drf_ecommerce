from rest_framework import serializers
from .models import Product, Category, Cart, CartItem, Order, OrderItem, Images, Discount, Coupon, ShippingAddress

default_errors = {
    'required': 'El campo es obligatorio',
    'blank': 'El campo no puede estar en blanco.',
    'max_length': 'El campo no puede tener más de {max_length} caracteres.',
    'invalid': 'El tipo de dato es inválido',

}
decimals_errors = {        
    'max_digits': 'No debe exceder de {max_length} digitos.',
    'max_decimal_places': 'No debe exceder de {max_decimal_places} decimales.',
}

choice_errors = {
    'invalid_choice': '{input} no es una opción válida'
}

key_errors = {
    'does_not_exist': 'No existe registro con pk = {pk_value}',
    'incorrect_type': 'Tipo de dato incorrecto',
}



class ImageSerializer(serializers.ModelSerializer):
    path = serializers.ImageField(use_url = True, allow_empty_file = False, required = True)
    
    class Meta:
        model = Images
        fields = ['path']


class ProductSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many = False, allow_null = True)
    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'images', 'stock', 'category', 'discount', 'created_at', 'updated_at']
        extra_kwargs = {
            'name': {
                'error_messages': default_errors,
            },
            'description': {
                'error_messages': default_errors,
            },
            'price': {
                'error_messages': {**default_errors, **decimals_errors}
            },
            'stock': {
                'error_messages': default_errors,
            },
            'category': {
                'error_messages': {**default_errors, **key_errors},
                'required': True,
                'allow_null': False,
            },
            'discount': {
                'error_messages': {**default_errors, **key_errors},
            },
            'created_at': {
                'error_messages': default_errors,
                'read_only': True,
            },
            'updated_at': {
                'error_messages': default_errors,
                'read_only': True,
            },
        }
        
            
    def create(self, validated_data):
        image = validated_data.pop('images', None)
        product = Product.objects.create(**validated_data)
        if image:
            Images.objects.create(path=image['path'], product=product)
        return product
    
        
    # def update(self, instance, validated_data):
    #     image_data = validated_data.pop('images', None)  

    #     instance.name = validated_data.get('name', instance.name)
    #     instance.description = validated_data.get('description', instance.description)
    #     instance.price = validated_data.get('price', instance.price)
    #     instance.stock = validated_data.get('stock', instance.stock)
    #     instance.category = validated_data.get('category', instance.category)
    #     instance.discount = validated_data.get('discount', instance.discount)
    #     instance.save()

    #     if image_data:
    #         if instance.images:
    #             instance.images.path = image_data['path']
    #             instance.images.save()
    #     else:
    #         Images.objects.create(path=image_data['path'], product=instance)

    #     return instance
    
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['images'] = [image.path.url for image in instance.image_product.all()]
        representation['category'] = instance.category.name
        representation['discount'] = f'{instance.discount.discount * 100 + "%" if instance.discount else ""}'
        return representation
        
        

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']
        extra_kwargs = {
            'name': {
                'error_messages': default_errors
            }
        }
    def to_representation(self, instance):
        representation =  super().to_representation(instance)
        representation['product'] = [{'name': product.name,
                                      'description': product.description,
                                      'price': product.price,
                                      'stock': product.stock,
                                      } for product in instance.product.all()]
        




        

