# backend/apps/company_profile/serializers.py

from rest_framework import serializers
from .models import CompanyProfile, SocialMedia, Address


class SocialMediaSerializer(serializers.ModelSerializer):
    icon = serializers.CharField(source="icon.icon", read_only=True)

    class Meta:
        model = SocialMedia
        fields = [
            "name",
            "link",
            "icon",
        ]


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = [
            "cep",
            "address",
            "number",
            "neighborhood",
            "city",
            "state",
        ]


class CompanyProfileSerializer(serializers.ModelSerializer):
    social_media_profiles = SocialMediaSerializer(many=True, read_only=True)
    address = AddressSerializer(read_only=True)
    address_icon = serializers.CharField(source="address_icon.icon", read_only=True)
    phone_icon = serializers.CharField(source="phone_icon.icon", read_only=True)
    email_icon = serializers.CharField(source="email_icon.icon", read_only=True)
    opening_hours_icon = serializers.CharField(
        source="opening_hours_icon.icon", read_only=True
    )

    class Meta:
        model = CompanyProfile
        fields = [
            "name",
            "logo",
            "cnpj",
            "address",
            "address_icon",
            "phone",
            "phone_icon",
            "email",
            "email_icon",
            "opening_hours",
            "opening_hours_icon",
            "whatsapp_number",
            "social_media_profiles",
            "meta_title",
            "meta_description",
            "meta_keywords",
        ]
