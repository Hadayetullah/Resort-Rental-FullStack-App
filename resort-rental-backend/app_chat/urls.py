from django.urls import path

from . import views

urlpatterns = [
    path('', views.conversations_list, name='api_conversation_list'),
]
