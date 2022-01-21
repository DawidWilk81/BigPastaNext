
from django.urls import path, include
from rest_framework import routers
from .views import PastaViewset, UserViewSet
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework_simplejwt import views as jwt_views

router = routers.DefaultRouter()
router.register("pastas", PastaViewset)
router.register("users", UserViewSet)
urlpatterns = [
    path('', include(router.urls)),
    path('auth/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),

]
