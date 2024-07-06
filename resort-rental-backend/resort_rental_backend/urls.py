from django.conf import settings
from django.conf.urls.static import static

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/properties/', include('app_property.urls')),
    path('api/auth/', include('app_useraccount.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
