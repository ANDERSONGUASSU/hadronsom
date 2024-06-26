from django.db import models


class HomePage(models.Model):
    logo = models.ImageField(upload_to="logos/")
    menu_items = models.JSONField(default=list)
    social_links = models.JSONField(default=dict)
    background_image = models.ImageField(upload_to="backgrounds/")
    hero_text = models.CharField(max_length=255)
    hero_description = models.TextField()
    button_text = models.CharField(max_length=50)


def __str__(self):
    return "Site Content"
