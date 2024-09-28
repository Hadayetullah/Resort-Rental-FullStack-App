from django.urls import re_path

from . import consumers

'''
websocket_urlpatterns = [
    re_path("ws/<str:room_name>/", consumers.ChatConsumer.as_asgi()),
]
'''
# re_path does not support above syntax directly as it is Django's newer path converters style. 
# Instead, re_path uses raw patterns(Below).

websocket_urlpatterns = [
    re_path(r'ws/(?P<room_name>[^/]+)/$', consumers.ChatConsumer.as_asgi()),
]