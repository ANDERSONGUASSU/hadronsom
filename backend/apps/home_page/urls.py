# backend/apps/home_page/urls.py

from django.urls import path
from .views import HeroView, AboutSectionListView

urlpatterns = [
    path('hero/', HeroView.as_view(), name='hero'),
    path('about-section/', AboutSectionListView.as_view(), name='about-section'),
]
