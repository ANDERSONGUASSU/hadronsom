from django.db import models
from apps.icons.models import IconFa
from imagefield.fields import ImageField


class Card(models.Model):
    icon = models.ForeignKey(IconFa, on_delete=models.SET_NULL, null=True, verbose_name="Icone")
    title = models.CharField(max_length=255, verbose_name="Título")
    description = models.TextField(verbose_name="Descrição")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Card"
        verbose_name_plural = "Cards"
        ordering = ["title"]


class Timeline(models.Model):
    title = models.CharField(max_length=255, verbose_name="Título")
    img = ImageField(
        upload_to="timeline/",
        formats={
            "thumb": ["default", ("crop", (300, 300))],
            "desktop": ["default", ("thumbnail", (800, 600))],
        },
        auto_add_fields=True,
        blank=True,
        verbose_name="Imagem",
    )
    year = models.DateField(verbose_name="Data")
    description = models.TextField(verbose_name="Descrição")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Linha do tempo"
        verbose_name_plural = "Linhas do tempo"
        ordering = ["year"]


class SocialNetwork(models.Model):
    name = models.CharField(max_length=255, verbose_name="Nome")
    icon = models.ForeignKey(IconFa, on_delete=models.SET_NULL, null=True, verbose_name="Icone")
    color = models.CharField(max_length=7, verbose_name="Cor do icone", default="#1877F2")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Rede social"
        verbose_name_plural = "Redes sociais"
        ordering = ["name"]


class Team(models.Model):
    name = models.CharField(max_length=255, verbose_name="Nome")
    position = models.CharField(max_length=255, verbose_name="Cargo")
    img = ImageField(
        upload_to="team/",
        formats={
            "thumb": ["default", ("crop", (300, 300))],
            "desktop": ["default", ("thumbnail", (800, 600))],
        },
        auto_add_fields=True,
        blank=True,
        verbose_name="Imagem",
    )
    description = models.TextField(verbose_name="Descrição")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Time"
        verbose_name_plural = "Time"
        ordering = ["name"]


class TeamSocialNetwork(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name="social_networks", verbose_name="Time")
    social_network = models.ForeignKey(SocialNetwork, on_delete=models.CASCADE, verbose_name="Rede social")
    url = models.URLField(verbose_name="URL")

    def __str__(self):
        return f'{self.team.name} - {self.social_network}'

    class Meta:
        verbose_name = "Rede social do time"
        verbose_name_plural = "Redes sociais do time"
        ordering = ["team"]
