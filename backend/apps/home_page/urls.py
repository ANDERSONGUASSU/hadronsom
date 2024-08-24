# backend/apps/home_page/urls.py

from django.urls import path
from .views import HeroView, AboutSectionListView, ProductsServicesView

urlpatterns = [
    path('hero/', HeroView.as_view(), name='hero'),
    path('about-section/', AboutSectionListView.as_view(), name='about-section'),
    path('products-services-section/', ProductsServicesView.as_view(), name='products-services-section'),
]
