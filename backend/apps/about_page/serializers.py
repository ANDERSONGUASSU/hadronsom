# backend/apps/about_page/serializers.py
from rest_framework import serializers
from .models import Card, Timeline, Team, SocialNetwork, TeamSocialNetwork


class CardSerializer(serializers.ModelSerializer):
    icon = serializers.CharField(source="icon.icon", read_only=True)

    class Meta:
        model = Card
        fields = ["icon", "title", "description"]


class TimelineSerializer(serializers.ModelSerializer):
    img = serializers.SerializerMethodField()

    class Meta:
        model = Timeline
        fields = ["title", "img", "year", "description"]

    def get_img(self, obj):
        return obj.img.url if obj.img else None


class SocialNetworkSerializer(serializers.ModelSerializer):
    icon = serializers.CharField(source="icon.icon", read_only=True)

    class Meta:
        model = SocialNetwork
        fields = ["name", "icon", "color"]


class TeamSocialNetworkSerializer(serializers.ModelSerializer):
    social_network = SocialNetworkSerializer()

    class Meta:
        model = TeamSocialNetwork
        fields = ["social_network", "url"]


class TeamSerializer(serializers.ModelSerializer):
    img = serializers.SerializerMethodField()
    social_networks = TeamSocialNetworkSerializer(many=True, read_only=True)

    class Meta:
        model = Team
        fields = ["name", "position", "img", "description", "social_networks"]

    def get_img(self, obj):
        return obj.img.url if obj.img else None
