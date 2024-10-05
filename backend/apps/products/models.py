# backend/apps/products/models.py
from django.db import models
from django.utils.text import slugify
from imagefield.fields import ImageField
from colorfield.fields import ColorField
from django.db.models.signals import pre_save
from django.core.validators import MinValueValidator, MaxValueValidator


class Brand(models.Model):
    name = models.CharField(max_length=255, verbose_name="Nome da Marca")
    slug = models.SlugField(blank=True, verbose_name="URL Amigável")

    class Meta:
        ordering = ["name"]
        verbose_name_plural = "Marcas"

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args)


class Categories(models.Model):
    name = models.CharField(max_length=255, verbose_name="Nome da Categoria")
    slug = models.SlugField(blank=True)
    img = ImageField(
        upload_to="category_images/",
        formats={
            "thumb": ["default", ("crop", (300, 300))],
            "carousel": ["default", ("thumbnail", (600, 400))],
        },
        auto_add_fields=True,
        blank=True,
        verbose_name="Imagem da categoria sem o fundo",
    )

    class Meta:
        ordering = ["name"]
        verbose_name_plural = "Categorias"

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)


class Products(models.Model):
    name = models.CharField(max_length=255, verbose_name="Nome do Produto")
    category = models.ForeignKey(
        Categories, on_delete=models.CASCADE, verbose_name="Categoria"
    )
    brand = models.ForeignKey(
        Brand, on_delete=models.CASCADE, verbose_name="Marca", blank=True, null=True
    )
    description = models.TextField(verbose_name="Descrição do Produto")
    detailed_description = models.TextField(
        blank=True, verbose_name="Descrição detalhada do Produto"
    )
    views = models.PositiveIntegerField(
        default=0, verbose_name="Número de Visualizações"
    )
    price = models.DecimalField(max_digits=8, decimal_places=2, verbose_name="Preço")
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
    in_stock = models.BooleanField(default=True, verbose_name="Em estoque?")
    sold_separately = models.BooleanField(
        default=True, verbose_name="Vendido Separadamente?"
    )
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Data de Criação")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Data de Atualização")

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Produto"
        verbose_name_plural = "Produtos"

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if self.on_sale and self.sale_price >= self.price:
            raise ValueError("O preço promocional deve ser menor que o preço normal.")
        super().save(*args, **kwargs)


def calculate_sale_price(sender, instance, **kwargs):
    if instance.on_sale:
        instance.sale_price = float(instance.price) * (1 - float(instance.discount_percentage) / 100)
    else:
        instance.sale_price = None


pre_save.connect(calculate_sale_price, sender=Products)


class Color(models.Model):
    product = models.ForeignKey(
        Products, on_delete=models.CASCADE, related_name="cores"
    )
    name = models.CharField(max_length=50, verbose_name="Nome do Cor")
    hex_code = ColorField(
        max_length=7,
        verbose_name="Código Hexadecimal",
        default="#FFFFFF",
    )

    class Meta:
        unique_together = ("product", "hex_code")
        ordering = ["name"]
        verbose_name_plural = "Cores"

    def __str__(self):
        return self.name


class ProductSpecification(models.Model):
    product = models.ForeignKey(
        Products, on_delete=models.CASCADE, related_name="Especificações"
    )
    title = models.CharField(max_length=255, verbose_name="Título")
    specification = models.TextField(verbose_name="Especificação")

    def __str__(self):
        return self.title

    class Meta:
        ordering = ["title"]
        verbose_name_plural = "Especificações do Produto"


class ProductImage(models.Model):
    product = models.ForeignKey(
        Products, on_delete=models.CASCADE, related_name="product_image_set"
    )
    image = ImageField(
        upload_to="product_images/",
        formats={
            "thumb": ["default", ("crop", (300, 300))],
            "desktop": ["default", ("thumbnail", (800, 600))],
        },
        auto_add_fields=True,
        blank=True,
        verbose_name="Imagem",
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f" Image de {self.product.name}"

    class Meta:
        ordering = ["created_at"]
        verbose_name_plural = "Imagens do Produto"
