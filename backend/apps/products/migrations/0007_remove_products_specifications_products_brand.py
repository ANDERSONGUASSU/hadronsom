# Generated by Django 5.0.6 on 2024-08-31 09:17

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("products", "0006_brand_productspecification"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="products",
            name="specifications",
        ),
        migrations.AddField(
            model_name="products",
            name="brand",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="products.brand",
                verbose_name="Marca",
            ),
        ),
    ]
