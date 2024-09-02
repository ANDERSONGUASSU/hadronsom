from rest_framework import serializers
from .models import Categories, Products, ProductImage, Brand, ProductSpecification, Color


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = '__all__'


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = '__all__'


class ProductsSpecificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductSpecification
        fields = '__all__'


class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = '__all__'


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = '__all__'


class ProductsSerializer(serializers.ModelSerializer):
    category = CategoriesSerializer()
    brand = BrandSerializer()
    specifications = ProductsSpecificationSerializer(many=True, source='Especificações')
    images = ProductImageSerializer(many=True, source='product_image_set')
    cores = ColorSerializer(many=True)

    class Meta:
        model = Products
        fields = '__all__'

    def create(self, validated_data):
        category_data = validated_data.pop('category')
        brand_data = validated_data.pop('brand', None)
        specifications_data = validated_data.pop('Especificações', [])
        images_data = validated_data.pop('images', [])
        cores_data = validated_data.pop('cores', [])

        category, _ = Categories.objects.get_or_create(**category_data)
        brand = Brand.objects.get_or_create(**brand_data)[0] if brand_data else None

        product = Products.objects.create(category=category, brand=brand, **validated_data)

        ProductSpecification.objects.bulk_create(
            [ProductSpecification(product=product, **spec_data) for spec_data in specifications_data]
        )
        ProductImage.objects.bulk_create(
            [ProductImage(product=product, **image_data) for image_data in images_data]
        )
        Color.objects.bulk_create(
            [Color(product=product, **color_data) for color_data in cores_data]
        )

        return product

    def update(self, instance, validated_data):
        category_data = validated_data.pop('category')
        brand_data = validated_data.pop('brand', None)
        specifications_data = validated_data.pop('Especificações', [])
        images_data = validated_data.pop('images', [])
        cores_data = validated_data.pop('cores', [])

        instance.category, _ = Categories.objects.get_or_create(**category_data)
        if brand_data:
            instance.brand = Brand.objects.get_or_create(**brand_data)[0]

        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.detailed_description = validated_data.get('detailed_description', instance.detailed_description)
        instance.price = validated_data.get('price', instance.price)
        instance.on_sale = validated_data.get('on_sale', instance.on_sale)
        instance.sale_price = validated_data.get('sale_price', instance.sale_price)
        instance.in_stock = validated_data.get('in_stock', instance.in_stock)
        instance.save()

        instance.especificações.all().delete()
        ProductSpecification.objects.bulk_create(
            [ProductSpecification(product=instance, **spec_data) for spec_data in specifications_data]
        )

        instance.images.all().delete()
        ProductImage.objects.bulk_create(
            [ProductImage(product=instance, **image_data) for image_data in images_data]
        )

        instance.cores.all().delete()
        Color.objects.bulk_create(
            [Color(product=instance, **color_data) for color_data in cores_data]
        )

        return instance
