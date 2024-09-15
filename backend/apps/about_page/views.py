# backend/apps/about_page/views.py
from rest_framework import viewsets
from .models import Card, Timeline, Team, SocialNetwork, TeamSocialNetwork
from .serializers import (
    CardSerializer, TimelineSerializer, TeamSerializer, SocialNetworkSerializer, TeamSocialNetworkSerializer
)
from rest_framework.response import Response


class AboutPageViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        if self.basename == 'cards':
            return Card.objects.all()
        elif self.basename == 'timeline':
            return Timeline.objects.all()
        elif self.basename == 'team':
            return Team.objects.all()
        elif self.basename == 'social_networks':
            return SocialNetwork.objects.all()
        elif self.basename == 'team_social_networks':
            return TeamSocialNetwork.objects.all()
        return Team.objects.none()

    def get_serializer_class(self):
        if self.basename == 'cards':
            return CardSerializer
        elif self.basename == 'timeline':
            return TimelineSerializer
        elif self.basename == 'team':
            return TeamSerializer
        elif self.basename == 'social_networks':
            return SocialNetworkSerializer
        elif self.basename == 'team_social_networks':
            return TeamSocialNetworkSerializer
        return TeamSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        data = serializer.data

        if self.basename == 'timeline':
            data['img'] = instance.img.url if instance.img else None
        elif self.basename == 'team':
            data['img'] = instance.img.url if instance.img else None
        return Response(data)
