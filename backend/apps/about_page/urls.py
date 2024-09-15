# backend/apps/about_page/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AboutPageViewSet

router = DefaultRouter()
router.register('about/cards', AboutPageViewSet, basename='cards')
router.register('about/timeline', AboutPageViewSet, basename='timeline')
router.register('about/team', AboutPageViewSet, basename='team')
router.register('about/social_networks', AboutPageViewSet, basename='social_networks')
router.register('about/team_social_networks', AboutPageViewSet, basename='team_social_networks')

urlpatterns = [
    path('', include(router.urls)),
]
