
from django.urls import path, include
from rest_framework import routers
from .views import PastaViewset, UserViewSet
from rest_framework.authtoken.views import ObtainAuthToken

router = routers.DefaultRouter()
router.register("pastas", PastaViewset)
router.register("users", UserViewSet)
urlpatterns = [
    path('', include(router.urls)),
    path('auth/', ObtainAuthToken.as_view())

]
