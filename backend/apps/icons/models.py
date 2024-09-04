# backend/apps/icons/models.py
from django.db import models


class IconFa(models.Model):
    icon = models.CharField(max_length=50, unique=True, help_text="Nome do icone")

    def __str__(self):
        return self.icon

    class Meta:
        verbose_name = "Icone fa"
        verbose_name_plural = "Icones fa"
