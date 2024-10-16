from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Product, Category, Cart, CartItem, Order, OrderItem, Images, Discount, Coupon, ShippingAddress
from .serializers import ProductSerializer, ImageSerializer, CategorySerializer


class ProductListView(ListCreateAPIView):
    http_method_names = ['get', 'post']
    queryset = Product.objects.filter(active = True).prefetch_related('image', 'category', 'discount')
    serializer_class = ProductSerializer
    

class ProductDetailView(RetrieveUpdateDestroyAPIView):
    http_method_names = ['get', 'post', 'put', 'patch', 'delete']
    queryset = Product.objects.prefetch_related('image', 'category', 'discount')
    serializer_class = ProductSerializer
    
    def destroy(self, request, *args, **kwargs):
        product = self.get_object()
        product.soft_delete()
        return Response("Producto borrado correctamente", status=status.HTTP_204_NO_CONTENT)


class CategoryListView(ListCreateAPIView):
    http_method_names = ['get', 'post']
    queryset = Category.objects.prefetch_related('product')
    serializer_class = CategorySerializer

class CategoryDetailView(RetrieveUpdateDestroyAPIView):
    http_method_names = ['get', 'post', 'put', 'patch', 'delete']
    queryset = Category.objects.prefetch_related('product')
    serializer_class = CategorySerializer    