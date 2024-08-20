# backend/apps/home_page/models.py
from django.contrib import admin
from .models import Hero, AboutSection, AboutCard

admin.site.register(Hero)


class CardInline(admin.StackedInline):
    model = AboutCard
    extra = 1  # Número de cards extras em branco para adicionar por padrão


@admin.register(AboutSection)
class AboutSectionAdmin(admin.ModelAdmin):
    inlines = [CardInline]

# Registra o modelo Card separadamente se você quiser gerenciá-los também diretamente


@admin.register(AboutCard)
class CardAdmin(admin.ModelAdmin):
    list_display = ('title', 'icon', 'about_section')
