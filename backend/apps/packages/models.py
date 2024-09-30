from django.db import models
from imagefield.fields import ImageField
from ..products.models import Products


class Packege(models.Model):
    name = models.CharField(max_length=255, verbose_name="Nome do Pacote")
    products = models.ManyToManyField(Products, verbose_name="Produtos do Pacote")
    description = models.TextField(blank=True, verbose_name="Descrição do Pacote")
    image = ImageField(
        upload_to="package_images/", verbose_name="Imagem do Pacote",
        blank=True,
        formats={
            "thumb": ["default", ("crop", (300, 300))],
            "desktop": ["default", ("thumbnail", (800, 600))],
        },
        auto_add_fields=True,
    )
    price = models.DecimalField(max_digits=8, decimal_places=2, verbose_name="Preço do Pacote")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Data de Criação")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Data de Atualização")
    has_sound_coverage = models.BooleanField(default=False, verbose_name="Tem Cobertura de Som?")
    sound_coverage_area = models.PositiveIntegerField(
        default=0, verbose_name="Área de Cobertura de Som", blank=True, null=True)
    featured = models.BooleanField(default=False, verbose_name="Pacote em Destaque?")

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Pacote"
        verbose_name_plural = "Pacotes"

    def __str__(self):
        return self.name
