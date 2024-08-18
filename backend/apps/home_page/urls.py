# backend/apps/home_page/urls.py

from django.urls import path
from .views import HeroView

urlpatterns = [
    path('hero/', HeroView.as_view(), name='hero'),
]
