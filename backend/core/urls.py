from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("supersecret/", admin.site.urls),
    path("api/v1/", include("apps.home_page.urls")),
    path("api/v1/", include("apps.products.urls")),
    path("api/v1/", include("apps.about_page.urls")),
    path("api/v1/", include("apps.company_profile.urls")),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
