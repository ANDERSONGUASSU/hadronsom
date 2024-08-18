# backend/apps/home_page/views.py

from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Hero
from .serializers import HeroSerializer


class HeroView(APIView):
    def get(self, request):
        hero = Hero.objects.first()
        serializer = HeroSerializer(hero)
        data = serializer.data
        data['hero_bg_img'] = hero.hero_bg_img.url
        return Response(data)
