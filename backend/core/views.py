from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.views import APIView
from .models import Product, Category, Cart, CartItem, Order, OrderItem, Images, Discount, Coupon, ShippingAddress
from .serializers import ProductSerializer, ImageSerializer, CategorySerializer


class ProductListView(ListCreateAPIView):
    http_method_names = ['get', 'post']
    queryset = Product.objects.prefetch_related('image', 'category', 'discount')
    serializer_class = ProductSerializer
    

class ProductDetailView(RetrieveUpdateDestroyAPIView):
    http_method_names = ['get', 'post', 'put', 'patch', 'delete']
    queryset = Product.objects.prefetch_related('image', 'category', 'discount')
    serializer_class = ProductSerializer


class CategoryListView(ListCreateAPIView):
    http_method_names = ['get', 'post']
    queryset = Category.objects.prefetch_related('product')
    serializer_class = CategorySerializer

class CategoryDetailView(RetrieveUpdateDestroyAPIView):
    http_method_names = ['get', 'post', 'put', 'patch', 'delete']
    queryset = Category.objects.prefetch_related('product')
    serializer_class = CategorySerializer    