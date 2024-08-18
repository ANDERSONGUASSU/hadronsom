# backend/apps/home_page/serializers.py
from rest_framework import serializers
from .models import Hero


class HeroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hero
        fields = ['hero_text_1', 'hero_text_2', 'hero_text_3', 'hero_bg_img']
