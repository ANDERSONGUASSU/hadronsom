# Generated by Django 5.0.6 on 2024-10-02 08:13

import django.db.models.deletion
import imagefield.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("packages", "0001_initial"),
        ("products", "0012_categories_img_categories_img_height_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="Package",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(max_length=255, verbose_name="Nome do Pacote"),
                ),
                (
                    "description",
                    models.TextField(blank=True, verbose_name="Descrição do Pacote"),
                ),
                (
                    "image",
                    imagefield.fields.ImageField(
                        blank=True,
                        height_field="image_height",
                        upload_to="package_images/",
                        verbose_name="Imagem do Pacote",
                        width_field="image_width",
                    ),
                ),
                (
                    "price",
                    models.DecimalField(
                        decimal_places=2, max_digits=8, verbose_name="Preço do Pacote"
                    ),
                ),
                (
                    "created_at",
                    models.DateTimeField(
                        auto_now_add=True, verbose_name="Data de Criação"
                    ),
                ),
                (
                    "updated_at",
                    models.DateTimeField(
                        auto_now=True, verbose_name="Data de Atualização"
                    ),
                ),
                (
                    "has_sound_coverage",
                    models.BooleanField(
                        default=False, verbose_name="Tem Cobertura de Som?"
                    ),
                ),
                (
                    "sound_coverage_area",
                    models.PositiveIntegerField(
                        blank=True,
                        default=0,
                        null=True,
                        verbose_name="Área de Cobertura de Som",
                    ),
                ),
                (
                    "featured",
                    models.BooleanField(
                        default=False, verbose_name="Pacote em Destaque?"
                    ),
                ),
                (
                    "image_width",
                    models.PositiveIntegerField(blank=True, editable=False, null=True),
                ),
                (
                    "image_height",
                    models.PositiveIntegerField(blank=True, editable=False, null=True),
                ),
                (
                    "image_ppoi",
                    imagefield.fields.PPOIField(default="0.5x0.5", max_length=20),
                ),
            ],
            options={
                "verbose_name": "Pacote",
                "verbose_name_plural": "Pacotes",
                "ordering": ["-created_at"],
            },
        ),
        migrations.CreateModel(
            name="PackageProduct",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("quantity", models.PositiveIntegerField(default=1)),
                (
                    "package",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="packages.package",
                    ),
                ),
                (
                    "product",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="products.products",
                    ),
                ),
            ],
            options={
                "verbose_name": "Produto no Pacote",
                "verbose_name_plural": "Produtos no Pacote",
            },
        ),
        migrations.DeleteModel(
            name="Packege",
        ),
    ]