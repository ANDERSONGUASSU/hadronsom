# Generated by Django 5.0.6 on 2024-08-30 10:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("products", "0003_products_slug_alter_products_category_and_more"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="productimage",
            options={
                "ordering": ["created_at"],
                "verbose_name_plural": "Imagens do Produto",
            },
        ),
        migrations.AlterModelOptions(
            name="products",
            options={"ordering": ["-created_at"], "verbose_name_plural": "Produtos"},
        ),
    ]
