# Generated by Django 5.0.6 on 2024-09-15 21:59

import imagefield.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("company_profile", "0005_alter_socialmedia_link"),
    ]

    operations = [
        migrations.AlterField(
            model_name="companyprofile",
            name="logo",
            field=imagefield.fields.ImageField(
                blank=True,
                height_field="logo_height",
                upload_to="logo/",
                verbose_name="Logo da empresa",
                width_field="logo_width",
            ),
        ),
    ]