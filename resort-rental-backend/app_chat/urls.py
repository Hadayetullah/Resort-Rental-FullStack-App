from django.urls import path

from . import views

urlpatterns = [
    path('', views.conversations_list, name='api_conversation_list'),
    path('start/<uuid:user_id>/', views.conversations_start, name='api_conversations_start'),
    path('<uuid:pk>/', views.conversations_detail, name='api_conversations_detail'),
]
