from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Product, Category, Cart, CartItem, Order, OrderItem, Images, Discount, Coupon, ShippingAddress
from .serializers import ProductSerializer, ImageSerializer, CategorySerializer

class ProductListView(ListCreateAPIView):
    http_method_names = ['GET', 'POST']
    queryset = Product.objects.prefetch_related('image_product', 'category', 'discount')
    serializer_class = ProductSerializer
    

class ProductDetailView(RetrieveUpdateDestroyAPIView):
    http_method_names = ['GET', 'PUT', 'PATCH', 'DELETE']
    queryset = Product.objects.all().prefetch_related('image_product', 'category', 'discount')
    serializer_class = ProductSerializer
    

class CategoryListView(ListCreateAPIView):
    http_method_names = ['GET', 'POST']
    queryset = Category.objects.prefetch_related('product')
    serializer_class = CategorySerializer

class CategoryDetailView(RetrieveUpdateDestroyAPIView):
    http_method_names = ['GET', 'PUT', 'PATCH', 'DELETE']
    queryset = Category.objects.prefetch_related('product')
    serializer_class = CategorySerializer    