# Generated by Django 4.2 on 2024-10-13 22:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_cart_coupon_discount_order_shippingaddress_product_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='images',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='image_product', to='core.product'),
        ),
        migrations.AlterField(
            model_name='product',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
