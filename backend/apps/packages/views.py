from rest_framework import viewsets
from .models import Package
from .serializers import PackegeSerializer
from rest_framework.response import Response


class PackegeViewSet(viewsets.ModelViewSet):
    queryset = Package.objects.all()
    serializer_class = PackegeSerializer

    def list(self, request, *args, **kwargs):
        # Obter a queryset dos pacotes
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        data = serializer.data

        # Modificar cada pacote para incluir o caminho das imagens dos produtos e do próprio pacote
        for item, package in zip(data, queryset):
            # Adicionar o caminho da imagem do próprio pacote
            if package.image:
                item["image"] = package.image.url

            # Para cada pacote, acessar os produtos associados
            package_products = package.packageproduct_set.all()

            # Adicionar os caminhos das imagens de cada produto
            item["products"] = []
            for package_product in package_products:
                product = package_product.product
                item["products"].append({
                    "id": product.id,
                    "name": product.name,
                    "quantidade": package_product.quantity,
                    "price": product.price,
                    "images": [
                        image.image.url for image in product.product_image_set.all()
                    ]
                })            

        return Response(data)
