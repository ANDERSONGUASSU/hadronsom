# Generated by Django 5.0.6 on 2024-08-23 11:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="IconFa",
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
                    "icon",
                    models.CharField(
                        help_text="Nome do icone", max_length=50, unique=True
                    ),
                ),
            ],
            options={
                "verbose_name": "Icone fa",
                "verbose_name_plural": "Icones fa",
            },
        ),
    ]