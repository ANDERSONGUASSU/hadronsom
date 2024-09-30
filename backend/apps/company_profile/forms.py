# backend/apps/company_profile/forms.py
from django import forms
from .models import Address


class AddressForm(forms.ModelForm):
    class Meta:
        model = Address
        fields = ['cep', 'address', 'number', 'neighborhood', 'city', 'state']
        widgets = {
            "cep": forms.TextInput(attrs={"autocomplete": "postal-code"}),
            "address": forms.TextInput(attrs={"autocomplete": "street-address"}),
            "number": forms.TextInput(attrs={"autocomplete": "street-number"}),
            "neighborhood": forms.TextInput(attrs={"autocomplete": "address-level2"}),
            "city": forms.TextInput(attrs={"autocomplete": "address-level2"}),
            "state": forms.TextInput(attrs={"autocomplete": "address-level1"}),
        }
