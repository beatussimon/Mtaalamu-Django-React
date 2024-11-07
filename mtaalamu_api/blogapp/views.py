from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer, UserSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.contrib.auth.models import User

class PostViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing post instances.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = "slug"
    permission_classes= [IsAuthenticated]
    authentication_classes = (TokenAuthentication,)

class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class= UserSerializer

