# backend/apps/packeges/admin.py

from django.contrib import admin
from .models import Package, PackageProduct


class PackageProductInline(admin.TabularInline):
    model = PackageProduct
    extra = 1
    min_num = 1
    max_num = 10
    verbose_name = "Produto no Pacote"
    verbose_name_plural = "Produtos no Pacote"
    fields = ('product', 'quantity')


class PackegeAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'featured', 'created_at', 'updated_at',)
    list_filter = ('featured', 'created_at', 'updated_at', 'has_sound_coverage')
    search_fields = ('name', 'description')

    fieldsets = (
        ('Informações Principais', {
            'fields': ('name', 'description', 'image', 'price', 'featured')
        }),
        ('Cobertura de Som', {
            'fields': ('has_sound_coverage', 'sound_coverage_area'),
            'classes': ('collapse',),  # Optional: Collapses this section by default
        }),
    )

    inlines = [PackageProductInline]


admin.site.register(Package, PackegeAdmin)
