# backend/apps/company_profile/admin.py

from django.contrib import admin, messages
from .models import InstagramToken, CompanyProfile, SocialMedia, Address
from .forms import AddressForm
from django.templatetags.static import static
from django.utils import timezone


# Instragram Token
@admin.register(InstagramToken)
class InstagramTokenAdmin(admin.ModelAdmin):
    list_display = ('access_token', 'created_at', 'updated_at', 'expires_at')

    def changelist_view(self, request, extra_context=None):
        try:
            token = InstagramToken.objects.latest('updated_at')
            days_since_update = (timezone.now() - token.updated_at).days
            if days_since_update >= 25:
                self.message_user(
                    request, "O Token de acesso ao Instagram está próximo de expirar.""Por favor, atualize o token.",
                    level=messages.WARNING
                )
        except InstagramToken.DoesNotExist:
            # Se não houver nenhum token no banco de dados
            self.message_user(request, "Nenhum token de acesso ao Instagram encontrado.", level=messages.ERROR)

        return super().changelist_view(request, extra_context)


# Criando um inline para Address


class AddressInline(admin.StackedInline):
    model = Address
    form = AddressForm
    extra = 1  # Número de endereços extras para adicionar no formulário
    can_delete = False


# Criando um inline Tabular para SocialMedia


class SocialMediaInline(admin.TabularInline):
    model = SocialMedia
    extra = 1  # Número de redes sociais extras para adicionar no formulário
    can_delete = True

# Registrando o modelo CompanyProfile no admin


@ admin.register(CompanyProfile)
class CompanyProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'logo', 'cnpj', 'phone', 'email', 'whatsapp_number', 'meta_title')
    search_fields = ('name', 'cnpj', 'phone', 'email')

    fieldsets = (
        (None, {
            'fields': (
                'name', 'logo', 'cnpj', 'phone', 'phone_icon', 'email', 'email_icon',
                'opening_hours', 'opening_hours_icon', 'whatsapp_number'
            )
        }),
        ('SEO', {
            'fields': ('meta_title', 'meta_description', 'meta_keywords')
        }),
        ('Endereço', {
            'fields': ('address', 'address_icon',)
        }),
    )

    # Adicionando inlines para os modelos relacionados
    inlines = [AddressInline, SocialMediaInline]

    class Media:
        js = (static("/js/cep1.js"),)
