# backend/apps/company_profile/models.py

from django.db import models
from imagefield.fields import ImageField
from apps.icons.models import IconFa
from django.core.validators import RegexValidator
from django.utils import timezone
from datetime import timedelta


class InstagramToken(models.Model):
    access_token = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    expires_at = models.DateTimeField(blank=True, null=True)

    def save(self, *args, **kwargs):
        if self.pk is None or self.access_token:
            self.expires_at = timezone.now() + timedelta(days=25)
        super().save(*args, **kwargs)

    class Meta:
        verbose_name = "Token do Instagram"
        verbose_name_plural = "Token do Instagram"

    def __str__(self):
        return f"Instagram Token - {self.expires_at}"


class SocialMedia(models.Model):
    name = models.CharField(max_length=50, verbose_name="Nome da rede social")
    link = models.URLField(verbose_name="Link da rede social", max_length=500)
    icon = models.ForeignKey(IconFa, on_delete=models.SET_NULL, null=True)
    company_profile = models.ForeignKey(
        'CompanyProfile',
        on_delete=models.CASCADE,
        related_name='social_media_profiles'
    )


class Address(models.Model):
    cep = models.CharField(max_length=9, verbose_name="CEP")
    address = models.CharField(max_length=255, verbose_name="Endereço")
    number = models.CharField(max_length=10, verbose_name="Nº")
    neighborhood = models.CharField(max_length=100, verbose_name="Bairro")
    city = models.CharField(max_length=100, verbose_name="Cidade")
    state = models.CharField(max_length=2, verbose_name="Estado")
    company_profile = models.ForeignKey(
        'CompanyProfile',
        on_delete=models.CASCADE,
        related_name='addresses'
    )


class CompanyProfile(models.Model):
    name = models.CharField(max_length=100, verbose_name="Nome da empresa")
    logo = ImageField(
        upload_to="logo/",
        formats={"thumb": ["default", ("crop", (300, 300))]},
        verbose_name="Logo da empresa",
        auto_add_fields=True,
        blank=True,
    )
    cnpj = models.CharField(max_length=18, verbose_name="CNPJ")
    address = models.ForeignKey(Address, on_delete=models.SET_NULL, null=True)
    address_icon = models.ForeignKey(IconFa, on_delete=models.SET_NULL, null=True, related_name="address_icon")
    phone = models.CharField(
        max_length=20,
        verbose_name="Telefone",
        help_text="Formato de telefone: +55 (DD) XXXX-XXXX",
        validators=[
            RegexValidator(
                regex=r'^\+55 \(\d{2}\) \d{4,5}-\d{4}$',
                message="Formato de telefone inválido. Use: +55 (DD) XXXX-XXXX",
            ),
        ],

    )
    phone_icon = models.ForeignKey(IconFa, on_delete=models.SET_NULL, null=True, related_name="phone_icon")
    email = models.EmailField(verbose_name="E-mail")
    email_icon = models.ForeignKey(IconFa, on_delete=models.SET_NULL, null=True, related_name="email_icon")
    opening_hours = models.CharField(max_length=255, verbose_name="Horário de funcionamento")
    opening_hours_icon = models.ForeignKey(
        IconFa, on_delete=models.SET_NULL, null=True, related_name="opening_hours_icon"
    )
    whatsapp_number = models.CharField(
        max_length=20,
        verbose_name="Número do Whatsapp",

        help_text="Formato de telefone: +55 (DD) XXXX-XXXX",
        validators=[
            RegexValidator(
                regex=r'^\+55 \(\d{2}\) \d{4,5}-\d{4}$',
                message="Formato de telefone inválido. Use: +55 (DD) XXXX-XXXX",
            ),
        ],
    )
    meta_title = models.CharField(max_length=255, verbose_name="Título do site")
    meta_description = models.TextField(verbose_name="Descrição do site")
    meta_keywords = models.TextField(verbose_name="Palavras-chave")

    class Meta:
        verbose_name = "Dados da Empresa"
        verbose_name_plural = "Dados da Empresa"

    def __str__(self):
        return self.name
