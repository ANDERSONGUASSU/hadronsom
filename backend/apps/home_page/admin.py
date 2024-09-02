# backend/apps/home_page/models.py
from django.contrib import admin
from .models import Hero, AboutSection, AboutCard, ProducstsServicesCard, ProductsServicesSection, FAQSection

admin.site.register(Hero)


class CardInlineAbout(admin.StackedInline):
    model = AboutCard
    extra = 1


@admin.register(AboutSection)
class AboutSectionAdmin(admin.ModelAdmin):
    inlines = [CardInlineAbout]


class CardInlineProductsServices(admin.StackedInline):
    model = ProducstsServicesCard
    extra = 1


@admin.register(ProductsServicesSection)
class ProductsServicesSectionAdmin(admin.ModelAdmin):
    inlines = [CardInlineProductsServices]


admin.site.register(FAQSection)
