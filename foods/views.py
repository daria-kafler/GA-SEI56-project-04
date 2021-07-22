import rest_framework
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Food
from .serializer import FoodSerializer

class FoodListView(APIView):

    def get(self, _request):
        foods = Food.objects.all()
        serialized_foods = FoodSerializer(foods, many=True)
        return Response(serialized_foods.data, status=status.HTTP_200_OK)