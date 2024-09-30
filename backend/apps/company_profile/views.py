# backend/apps/company_profile/views.py

import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import CompanyProfile, InstagramToken
from .serializers import CompanyProfileSerializer


@api_view(['GET'])
def get_instagram_posts(request):
    try:
        token = InstagramToken.objects.latest('updated_at').access_token
        instagram_url = 'https://graph.instagram.com/me/media'
        params = {
            "fields": "id,caption,media_type,media_url,timestamp, children{media_url}",
            "access_token": token,
            "limit": 12,
        }
        response = requests.get(instagram_url, params=params)
        data = response.json()

        posts = data.get("data", [])
        return Response(posts)
    except InstagramToken.DoesNotExist:
        return Response({"error": "Token de Instagram não configurado."}, status=500)
    except Exception as e:
        return Response({"error": "Erro ao buscar posts do Instagram", "details": str(e)}, status=500)


class CompanyProfileListView(APIView):
    def get(self, request):
        company_profile = CompanyProfile.objects.first()
        serializer = CompanyProfileSerializer(company_profile)
        data = serializer.data
        data["logo"] = company_profile.logo.url if company_profile.logo else None
        return Response(data)
