# backend/apps/home_page/serializers.py

from rest_framework import serializers
from .models import Hero, AboutSection, AboutCard, ProductsServicesSection, ProducstsServicesCard


class HeroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hero
        fields = ['id', 'hero_title', 'hero_text_1', 'hero_text_2',
                  'hero_text_3', 'hero_bg_img', 'is_active', 'hero_description']


class AboutSectionCardSerializer(serializers.ModelSerializer):
    icon = serializers.CharField(source='icon.icon', read_only=True)

    class Meta:
        model = AboutCard
        fields = ['icon', 'title', 'description']


class AboutSectionSerializer(serializers.ModelSerializer):
    cards = AboutSectionCardSerializer(many=True, read_only=True)

    class Meta:
        model = AboutSection
        fields = ['title_info', 'description_info', 'cards']


class ProdutcsServicesCardSerializer(serializers.ModelSerializer):
    icon = serializers.CharField(source='icon.icon', read_only=True)

    class Meta:
        model = ProducstsServicesCard
        fields = ['icon', 'title', 'description']


class ProdutcsServicesSerializer(serializers.ModelSerializer):
    cards = ProdutcsServicesCardSerializer(many=True, read_only=True)

    class Meta:
        model = ProductsServicesSection
        fields = ['title_info', 'description_info', 'image1', 'alt_text1', 'image2', 'alt_text2', 'cards']
