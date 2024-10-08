# Generated by Django 5.0.6 on 2024-09-15 23:45

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("company_profile", "0007_alter_companyprofile_phone"),
    ]

    operations = [
        migrations.AlterField(
            model_name="companyprofile",
            name="whatsapp_number",
            field=models.CharField(
                help_text="Formato de telefone: +55 (DD) XXXX-XXXX",
                max_length=20,
                validators=[
                    django.core.validators.RegexValidator(
                        message="Formato de telefone inválido. Use: +55 (DD) XXXX-XXXX",
                        regex="^\\+55 \\(\\d{2}\\) \\d{4,5}-\\d{4}$",
                    )
                ],
                verbose_name="Número do Whatsapp",
            ),
        ),
    ]
