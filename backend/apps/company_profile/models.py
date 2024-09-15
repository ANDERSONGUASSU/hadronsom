from django.db import models
from imagefield.fields import ImageField
from apps.icons.models import IconFa


class SocialMedia(models.Model):
    name = models.CharField(max_length=50, verbose_name="Nome da rede social")
    link = models.URLField(verbose_name="Link da rede social")
    icon = models.ForeignKey(IconFa, on_delete=models.SET_NULL, null=True)


class CompanyProfile(models.Model):
    name = models.CharField(max_length=100, verbose_name="Nome da empresa")
    logo = ImageField(
        upload_to="logo/",
        formats={"thumb": ["default", ("crop", (300, 300))]},
        verbose_name="imagem",
        auto_add_fields=True,
        blank=True,
    )
    cnpj = models.CharField(max_length=18, verbose_name="CNPJ")
    cep = models.CharField(max_length=9, verbose_name="CEP")
    address = models.CharField(max_length=255, verbose_name="Endereço")
    number = models.CharField(max_length=10, verbose_name="Nº")
    neighborhood = models.CharField(max_length=100, verbose_name="Bairro")
    city = models.CharField(max_length=100, verbose_name="Cidade")
    state = models.CharField(max_length=2, verbose_name="Estado")
    phone = models.CharField(max_length=15, verbose_name="Telefone")
    email = models.EmailField(verbose_name="E-mail")
    opening_hours = models.CharField(max_length=255, verbose_name="Horário de funcionamento")
    whatsapp = models.CharField(max_length=15, verbose_name="Whatsapp")
    social_media = models.ManyToManyField(SocialMedia, verbose_name="Redes sociais")
    meta_title = models.CharField(max_length=255, verbose_name="Título do site")
    meta_description = models.TextField(verbose_name="Descrição do site")
    meta_keywords = models.TextField(verbose_name="Palavras-chave")
