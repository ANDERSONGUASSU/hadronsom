
# backend/apps/packages/serializers.py
from rest_framework import serializers
from .models import Package, Products
from ..products.models import ProductImage


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['image']


class ProductSerializer(serializers.ModelSerializer):
    quantity = serializers.IntegerField()
    product_images = ProductImageSerializer(many=True, source='product.product_image_set')

    class Meta:
        model = Products
        fields = ['id', 'product_images', 'quantity']


class PackegeSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, source='packageproduct_set')

    class Meta:
        model = Package
        fields = ['id', 'name', 'description', 'image', 'price', 'created_at', 'updated_at',
                  'has_sound_coverage', 'sound_coverage_area', 'featured', 'products']
