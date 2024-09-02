from django.contrib import admin
from .models import Categories, Products, ProductImage, Brand, ProductSpecification, Color


class ProductSpecificationInline(admin.TabularInline):
    model = ProductSpecification
    extra = 1


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1


class ColorInline(admin.TabularInline):
    model = Color
    extra = 1


@admin.register(Products)
class ProductsAdmin(admin.ModelAdmin):
    inlines = [ProductSpecificationInline, ProductImageInline, ColorInline]
    list_display = ('name', 'category', 'brand', 'price', 'in_stock', 'on_sale')
    list_filter = ('category', 'brand', 'in_stock', 'on_sale')
    search_fields = ('name', 'description', 'detailed_description')


admin.site.register(Categories)
admin.site.register(Brand)
