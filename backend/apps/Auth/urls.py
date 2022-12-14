from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('rejestracja/verify', views.index, name='activate-account'),
    path('api/rejestracja/klient', views.SignUpView.as_view()),
    path('api/rejestracja/verify', views.VerifyView.as_view()),
    path('api/logowanie', views.MyTokenObtainPairView.as_view()),
    path('api/token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/logout', views.LogoutView.as_view()),
    path('api/rejestracja/skp', views.SignUpSKPView.as_view()),
]