# backend/apps/home_page/views.py

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from .models import Hero, AboutSection, ProductsServicesSection, FAQSection, Testimonials
from .serializers import (
    HeroSerializer,
    AboutSectionSerializer,
    ProdutcsServicesSerializer,
    FAQSerializer,
    TestimonialsSerializer
)


class HeroView(APIView):
    def get(self, request):
        hero = Hero.objects.filter(is_active=True).first()
        if hero:
            serializer = HeroSerializer(hero)
            data = serializer.data
            data["hero_bg_img"] = hero.hero_bg_img.url
            return Response(data)
        return Response({"detail": "No active hero found."})


class AboutSectionListView(generics.ListAPIView):
    queryset = AboutSection.objects.all()
    serializer_class = AboutSectionSerializer


class ProductsServicesView(generics.ListAPIView):
    queryset = ProductsServicesSection.objects.all()
    serializer_class = ProdutcsServicesSerializer

    def get(self, request, *args, **kwargs):
        products_services = self.get_queryset()
        serializer = self.get_serializer(products_services, many=True)
        data = serializer.data

        for item, product_service in zip(data, products_services):
            item["image1"] = (
                product_service.image1.url if product_service.image1 else None
            )
            item["image2"] = (
                product_service.image2.url if product_service.image2 else None
            )

        return Response(data)


class FAQView(generics.ListAPIView):
    queryset = FAQSection.objects.all()
    serializer_class = FAQSerializer

    def get(self, request, *args, **kwargs):
        faq = self.get_queryset()
        serializer = self.get_serializer(faq, many=True)
        data = serializer.data

        return Response(data)


class TestimonialsView(generics.ListAPIView):
    queryset = Testimonials.objects.all()
    serializer_class = TestimonialsSerializer

    def get(self, request, *args, **kwargs):
        testimonials = self.get_queryset()
        serializer = self.get_serializer(testimonials, many=True)
        data = serializer.data

        for item, testimonial in zip(data, testimonials):
            item["avatar"] = testimonial.avatar.url if testimonial.avatar else None

        return Response(data)
