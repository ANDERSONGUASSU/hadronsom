from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PackegeViewSet

router = DefaultRouter()
router.register(r'packages', PackegeViewSet, basename='packages')

urlpatterns = [
    path('', include(router.urls)),
]
