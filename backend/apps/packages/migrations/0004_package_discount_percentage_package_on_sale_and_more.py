# Generated by Django 5.0.6 on 2024-10-10 09:07

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("packages", "0003_package_products"),
    ]

    operations = [
        migrations.AddField(
            model_name="package",
            name="discount_percentage",
            field=models.PositiveIntegerField(
                default=0,
                help_text="Insira o desconto em porcentagem (0-100).",
                validators=[
                    django.core.validators.MinValueValidator(0),
                    django.core.validators.MaxValueValidator(100),
                ],
                verbose_name="% de Desconto",
            ),
        ),
        migrations.AddField(
            model_name="package",
            name="on_sale",
            field=models.BooleanField(default=False, verbose_name="Em promoção?"),
        ),
        migrations.AddField(
            model_name="package",
            name="sale_price",
            field=models.DecimalField(
                blank=True,
                decimal_places=2,
                max_digits=8,
                null=True,
                verbose_name="Preço Promocional",
            ),
        ),
    ]