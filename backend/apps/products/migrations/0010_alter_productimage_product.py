# Generated by Django 5.0.6 on 2024-08-31 19:04

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("products", "0009_color"),
    ]

    operations = [
        migrations.AlterField(
            model_name="productimage",
            name="product",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="product_image_set",
                to="products.products",
            ),
        ),
    ]