# serializers.py
from rest_framework import serializers
from .models import SiteContent


class SiteContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteContent
        fields = [
            "logo",
            "menu_items",
            "social_links",
            "background_image",
            "hero_text",
            "hero_description",
            "button_text",
        ]
