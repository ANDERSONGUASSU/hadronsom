from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Review
from django.db.models import Avg


@receiver(post_save, sender=Review)
def update_product_rating(sender, instance, **kwargs):
    product = instance.product
    product.rating = Review.objects.filter(product=product).aggregate(Avg('rating'))['rating__avg']
    product.save()
