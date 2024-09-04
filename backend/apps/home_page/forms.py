# backend/apps/home_page/forms.py
from django import forms
from .models import Testimonials


class TestimonialsForm(forms.ModelForm):
    class Meta:
        model = Testimonials
        fields = ["avatar", "name", "location", "cep", "city", "state", "testimonials"]
        widgets = {
            "name": forms.TextInput(attrs={"autocomplete": "name"}),
            "location": forms.TextInput(attrs={"autocomplete": "address-level2"}),
            "cep": forms.TextInput(attrs={"autocomplete": "postal-code"}),
            "city": forms.TextInput(attrs={"autocomplete": "address-level2"}),
            "state": forms.TextInput(attrs={"autocomplete": "address-level1"}),
            "testimonials": forms.Textarea(attrs={"autocomplete": "off"}),
        }
