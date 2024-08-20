# backend/apps/home_page/views.py

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from .models import Hero, AboutSection
from .serializers import HeroSerializer, AboutSectionSerializer


class HeroView(APIView):
    def get(self, request):
        hero = Hero.objects.filter(is_active=True).first()
        if hero:
            serializer = HeroSerializer(hero)
            data = serializer.data
            data['hero_bg_img'] = hero.hero_bg_img.url
            return Response(data)
        return Response({"detail": "No active hero found."})


class AboutSectionListView(generics.ListAPIView):
    queryset = AboutSection.objects.all()
    serializer_class = AboutSectionSerializer
