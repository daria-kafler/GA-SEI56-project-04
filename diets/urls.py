from django.urls import path
from .views import DietListView

urlpatterns = [
    path('', DietListView.as_view())
]