# backend/apps/home_page/models.py
from django.contrib import admin
from .models import Hero, AboutSection, AboutCard

admin.site.register(Hero)


class CardInline(admin.StackedInline):
    model = AboutCard
    extra = 1


@admin.register(AboutSection)
class AboutSectionAdmin(admin.ModelAdmin):
    inlines = [CardInline]
