from rest_framework import viewsets
from .serializers import PastaSerializer, UserSerializer
from .models import Pasta
from django.contrib.auth.models import User, Group
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class PastaViewset(viewsets.ModelViewSet):
    serializer_class = PastaSerializer
    queryset = Pasta.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
