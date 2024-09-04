from django.urls import path
from .views import CategoriesList, CategoriesDetail, ProductsList, ProductsDetail

urlpatterns = [
    path("categories/", CategoriesList.as_view(), name="categories-list"),
    path(
        "categories/<slug:slug>/", CategoriesDetail.as_view(), name="categories-detail"
    ),
    path("products/", ProductsList.as_view(), name="products-list"),
    path("products/<int:pk>/", ProductsDetail.as_view(), name="products-detail"),
]
