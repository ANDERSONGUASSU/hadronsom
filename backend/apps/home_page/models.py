# backend/apps/home_page/models.py

from django.db import models
from apps.icons.models import IconFa
from django.core.exceptions import ValidationError
from imagefield.fields import ImageField


class Hero(models.Model):
    hero_title = models.CharField(max_length=255, default="A solução para o seu som é")
    hero_text_1 = models.CharField(max_length=255)
    hero_text_2 = models.CharField(max_length=255)
    hero_text_3 = models.CharField(max_length=255)
    hero_bg_img = models.ImageField(upload_to="hero_bg_img/")
    is_active = models.BooleanField(default=False)
    hero_description = models.TextField(
        default="Transforme qualquer espaço com as caixas de som Hádron.A combinação perfeita entre estilo e qualidade sonora que se adapta a todos os ambientes."  # NOQA
    )

    def save(self, *args, **kwargs):
        if self.is_active:
            Hero.objects.exclude(id=self.id).update(is_active=False)
        super().save(*args, **kwargs)


class AboutSection(models.Model):
    title_info = models.CharField(
        max_length=100,
        verbose_name="Título da Informação",
    )
    description_info = models.TextField(verbose_name="Descrição da Informação")

    def __str__(self):
        return self.title_info

    class Meta:
        verbose_name = "Sobre a empresa"
        verbose_name_plural = "Sobre a empresa"


class AboutCard(models.Model):

    about_section = models.ForeignKey(
        AboutSection, related_name="cards", on_delete=models.CASCADE
    )
    title = models.CharField(
        max_length=100, verbose_name="Título do Card", default="Digite o título"
    )
    description = models.TextField(
        verbose_name="Descrição do Card", default="Digite sua descrição"
    )
    icon = models.ForeignKey(IconFa, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.title


class ProductsServicesSection(models.Model):
    title_info = models.CharField(
        max_length=100,
        verbose_name="Título da Informação",
        default="Conheca nossos produtos",
    )
    description_info = models.TextField(
        verbose_name="Descrição da Informação",
        default="Caixas de som, equipamentos, móveis para seu som e muito mais",
    )
    image1 = models.ImageField(upload_to="products_services_section/")
    alt_text1 = models.CharField(max_length=255, blank=True, null=True)
    image2 = models.ImageField(upload_to="products_services_section/")
    alt_text2 = models.CharField(max_length=255, blank=True, null=True)

    def clean(self):
        if not self.image1 or not self.image2:
            raise ValidationError("A secão deve ter duas imagens.")

    def __str__(self):
        return self.title_info


class ProducstsServicesCard(models.Model):
    products_services_section = models.ForeignKey(
        ProductsServicesSection,
        related_name="cards",
        on_delete=models.CASCADE,
    )
    title = models.CharField(
        max_length=100, verbose_name="Título do card", default="Ditite o título"
    )
    description = models.TextField(
        verbose_name="Descrição do Card", default="Digite sua descrição"
    )
    icon = models.ForeignKey(IconFa, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.title


class FAQSection(models.Model):
    question = models.CharField(max_length=255, verbose_name="Pergunta")
    answer = models.TextField(verbose_name="Resposta")

    def __str__(self):
        return self.question

    class Meta:
        verbose_name = "Perguntas frequentes"
        verbose_name_plural = "Perguntas frequentes"


class Testimonials(models.Model):
    avatar = ImageField(
        upload_to="avatars/",
        formats={
            "thumb": ["default", ("crop", (300, 300))],
            "desktop": ["default", ("thumbnail", (800, 600))],
        },
        auto_add_fields=True,
        blank=True,
        verbose_name="Imagem",
    )
    name = models.CharField(max_length=100, verbose_name="Nome do Cliente")
    location = models.CharField(max_length=255, verbose_name="Nome do local")
    cep = models.CharField(max_length=9, verbose_name="CEP", blank=True, null=True)
    city = models.CharField(max_length=100, verbose_name="Cidade")
    state = models.CharField(max_length=2, verbose_name="Estado")
    testimonials = models.TextField(verbose_name="Mensagem")

    def __str__(self):
        return f"{self.name} - {self.location}"

    class Meta:
        verbose_name = "Depoimentos"
        verbose_name_plural = "Depoimentos"
