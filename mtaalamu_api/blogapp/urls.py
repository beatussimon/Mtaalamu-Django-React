from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostViewSet, UserViewset

# Create a router and register the PostViewSet with it
router = DefaultRouter()
router.register(r'posts', PostViewSet, basename='posts')
router.register('users', UserViewset)

urlpatterns = [
    path('', include(router.urls))  # Include the router URLs
]
