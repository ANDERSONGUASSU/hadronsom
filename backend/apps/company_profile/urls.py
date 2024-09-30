# backend/apps/company_profile/urls.py
from django.urls import path
from .views import CompanyProfileListView, get_instagram_posts

urlpatterns = [
    path("company-profile/", CompanyProfileListView.as_view(), name="company-profile"),
    path("instagram-posts/", get_instagram_posts, name="instagram-posts"),


]
