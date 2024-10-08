# Generated by Django 5.0.6 on 2024-08-29 10:51

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        (
            "products",
            "0002_remove_products_images_remove_products_images_height_and_more",
        ),
    ]

    operations = [
        migrations.AddField(
            model_name="products",
            name="slug",
            field=models.SlugField(blank=True, unique=True),
        ),
        migrations.AlterField(
            model_name="products",
            name="category",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to="products.categories",
                verbose_name="Categoria",
            ),
        ),
        migrations.AlterField(
            model_name="products",
            name="created_at",
            field=models.DateTimeField(
                auto_now_add=True, verbose_name="Data de Criação"
            ),
        ),
        migrations.AlterField(
            model_name="products",
            name="description",
            field=models.TextField(verbose_name="Descrição do Produto"),
        ),
        migrations.AlterField(
            model_name="products",
            name="detailed_description",
            field=models.TextField(
                blank=True, verbose_name="Descrição detalhada do Produto"
            ),
        ),
        migrations.AlterField(
            model_name="products",
            name="in_stock",
            field=models.BooleanField(default=True, verbose_name="Em estoque?"),
        ),
        migrations.AlterField(
            model_name="products",
            name="name",
            field=models.CharField(max_length=255, verbose_name="Nome do Produto"),
        ),
        migrations.AlterField(
            model_name="products",
            name="on_sale",
            field=models.BooleanField(default=False, verbose_name="Em promoção?"),
        ),
        migrations.AlterField(
            model_name="products",
            name="price",
            field=models.DecimalField(
                decimal_places=2, max_digits=8, verbose_name="Preço"
            ),
        ),
        migrations.AlterField(
            model_name="products",
            name="sale_price",
            field=models.DecimalField(
                blank=True,
                decimal_places=2,
                max_digits=8,
                null=True,
                verbose_name="Preço Promocional",
            ),
        ),
        migrations.AlterField(
            model_name="products",
            name="specifications",
            field=models.JSONField(verbose_name="Especificações do Produto"),
        ),
        migrations.AlterField(
            model_name="products",
            name="updated_at",
            field=models.DateTimeField(
                auto_now=True, verbose_name="Data de Atualização"
            ),
        ),
        migrations.AlterField(
            model_name="products",
            name="views",
            field=models.PositiveIntegerField(
                default=0, verbose_name="Número de Visualizações"
            ),
        ),
    ]
