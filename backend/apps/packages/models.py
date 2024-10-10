# backend/apps/packages/modesl.py

from django.db import models
from imagefield.fields import ImageField
from ..products.models import Products
from django.db.models.signals import pre_save
from django.core.validators import MinValueValidator, MaxValueValidator


class Package(models.Model):
    name = models.CharField(max_length=255, verbose_name="Nome do Pacote")
    description = models.TextField(blank=True, verbose_name="Descrição do Pacote")
    products = models.ManyToManyField(Products, verbose_name="Produtos do Pacote", through="PackageProduct")
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
    on_sale = models.BooleanField(default=False, verbose_name="Em promoção?")
    discount_percentage = models.PositiveIntegerField(
        default=0,
        validators=[
            MinValueValidator(0),
            MaxValueValidator(100),
        ],
        verbose_name=("% de Desconto"),
        help_text="Insira o desconto em porcentagem (0-100).",
    )
    sale_price = models.DecimalField(
        max_digits=8,
        decimal_places=2,
        blank=True,
        null=True,
        verbose_name="Preço Promocional",
    )
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


def calculate_package_price(sender, instance, **kwargs):
    total_price = 0
    for package_product in instance.packageproduct_set.all():
        total_price += package_product.product.price * package_product.quantity
    instance.price = total_price


pre_save.connect(calculate_package_price, sender=Package)


def calculate_sale_price(sender, instance, **kwargs):
    if instance.on_sale:
        instance.sale_price = float(instance.price) * (1 - float(instance.discount_percentage) / 100)
    else:
        instance.sale_price = None


pre_save.connect(calculate_sale_price, sender=Package)


class PackageProduct(models.Model):
    package = models.ForeignKey(Package, on_delete=models.CASCADE)
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    class Meta:
        verbose_name = "Produto no Pacote"
        verbose_name_plural = "Produtos no Pacote"
