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
    class Meta:
        model = Images
        fields = ['path']
    def to_representation(self, instance):
        return {
            'ruta': instance.path.url
        }


class ProductSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many = True)
    class Meta:
        Model = Product
        fields = ['id', 'name', 'description', 'price', 'stock', 'category', 'discount', 'created_at', 'update_at']
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
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['category'] = instance.category.name
        representation['discount'] = f'{instance.discount.discount * 100}%'
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
        




        

