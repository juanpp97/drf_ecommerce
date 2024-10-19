from django.urls import path
from .views import ProductListView, ProductDetailView, CategoryListView, CategoryDetailView, ShippingAddressDetailView, ShippingAddressListView

urlpatterns = [
    path('product/', ProductListView.as_view(), name='product_list'),
    path('product/<int:pk>', ProductDetailView.as_view(), name='product_detail'),
    path('category/', CategoryListView.as_view(), name='category_list'),
    path('category/<int:pk>', CategoryDetailView.as_view(), name='category_detail'),
    path ('shipping-info/', ShippingAddressListView.as_view(), name = 'shipping_list'),
    path ('shipping-info/<int:pk>', ShippingAddressDetailView.as_view(), name = 'shipping_detail'),  
]
