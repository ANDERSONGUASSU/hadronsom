from rest_framework.response import Response
from rest_framework import generics
from .models import Categories, Products
from .serializers import CategoriesSerializer, ProductsSerializer


class CategoriesList(generics.ListAPIView):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer


class CategoriesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer
    lookup_field = 'slug'


class ProductsList(generics.ListAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer

    def get(self, request, *args, **kwargs):
        products = self.get_queryset()
        serializer = self.get_serializer(products, many=True)
        data = serializer.data

        for item, product in zip(data, products):
            item['images'] = [image.image.url for image in product.product_image_set.all()]

        return Response(data)


class ProductsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer
    lookup_field = 'pk'

    def get(self, request, *args, **kwargs):
        product = self.get_object()
        product.views += 1
        product.save()
        serializer = self.get_serializer(product)
        data = serializer.data

        data['images'] = [image.image.url for image in product.product_image_set.all()]

        return Response(data)
