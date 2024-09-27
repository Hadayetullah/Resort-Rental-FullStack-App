from django.urls import path

from . import views

urlpatterns = [
    path('', views.conversations_list, name='api_conversation_list'),
    path('<uuid:pk>/', views.conversations_detail, name='api_conversations_detail'),
]
