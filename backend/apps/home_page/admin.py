# backend/apps/home_page/admin.py
from django.contrib import admin
from .models import (
    Hero,
    AboutSection,
    AboutCard,
    ProducstsServicesCard,
    ProductsServicesSection,
    FAQSection,
    Testimonials,
)
from .forms import TestimonialsForm
from django.templatetags.static import static


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


@admin.register(Testimonials)
class TestimonialsAdmin(admin.ModelAdmin):
    form = TestimonialsForm

    class Media:
        js = (static("/js/cep.js"),)
