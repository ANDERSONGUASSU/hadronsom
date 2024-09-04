from django.db import models
from apps.products.models import Products
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError


def validate_rating(value):
    if value < 1 or value > 5:
        raise ValidationError("A nota deve estar entre 1 e 5.")


class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField(validators=[validate_rating])
    title = models.CharField(max_length=255)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.username} - {self.product.name}"

    class Meta:
        ordering = ["-created_at"]
        unique_together = ["user", "product"]
