from django.db import models
from django.utils.text import slugify
from imagefield.fields import ImageField


class Categories(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, blank=True)

    class Meta:
        ordering = ['name']
        verbose_name_plural = 'Categorias'

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)


class Products(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(Categories, on_delete=models.CASCADE)
    images = ImageField(
        upload_to='products_images/',
        formats={
            'thumb': ['default', ('crop', (300, 300))],
            'desktop': ['default', ('thumbnail', (800, 600))],
        },
        auto_add_fields=True,
        blank=True,
        verbose_name='Imagem',
    )
    description = models.TextField()
    detailed_description = models.TextField(blank=True)
    specifications = models.JSONField()
    views = models.PositiveIntegerField(default=0)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    on_sale = models.BooleanField(default=False)
    sale_price = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True)
    in_stock = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if self.on_sale and self.sale_price >= self.price:
            raise ValueError('O preço promocional deve ser menor que o preço normal.')
        super().save(*args, **kwargs)
