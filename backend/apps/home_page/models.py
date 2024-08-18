# backend/apps/home_page/models.py
from django.db import models


class Hero(models.Model):
    hero_text_1 = models.CharField(max_length=100, help_text="Primeiro texto")
    hero_text_2 = models.CharField(max_length=100, help_text="Segundo texto")
    hero_text_3 = models.CharField(max_length=100, help_text="Terceiro texto")
    hero_bg_img = models.ImageField(upload_to='backgrounds/', help_text="Imagem de fundo para o Hero")

    def __str__(self):
        return "Configurações do Hero"
