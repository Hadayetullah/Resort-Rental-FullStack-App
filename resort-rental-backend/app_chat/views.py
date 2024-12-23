from django.http import JsonResponse

from rest_framework.decorators import api_view

from .models import Conversation, ConversationMessage
from .serializers import ConversationListSerializer, ConversationDetailSerializer, ConversationMessageSerializer
from app_useraccount.models import User


# Create your views here.
@api_view(['GET'])
def conversations_list(request):
    serializer = ConversationListSerializer(request.user.conversations.all(), many=True)

    return JsonResponse(serializer.data, safe=False)


@api_view(['GET'])
def conversations_detail(request, pk):
    conversation = request.user.conversations.get(pk=pk)

    conversation_serializer = ConversationDetailSerializer(conversation, many=False)
    message_serializer = ConversationMessageSerializer(conversation.messages.all(), many=True)


    return JsonResponse({
        'conversation': conversation_serializer.data,
        'messages': message_serializer.data
    }, safe=False)



@api_view(['GET'])
def conversations_start(request, user_id):
    # conversations = Conversation.objects.filter(users__in=[user_id]).filter(users__in=[request.user.id])
    conversations = Conversation.objects.filter(users__in=[request.user.id, user_id])
    if conversations.count() > 0:
        conversation = conversations.first()
        return JsonResponse({
            'success': True,
            'conversation_id': conversation.id
        })
    else:
        user = User.objects.get(pk=user_id)
        conversation = Conversation.objects.create()
        conversation.users.add(request.user, user)
        # conversation.users.add(request.user)
        # conversation.users.add(user)
        # conversation.save()
        return JsonResponse({
            'success': True,
            'conversation_id': conversation.id
        })
    
