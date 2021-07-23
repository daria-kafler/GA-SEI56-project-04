from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .models import Food
from .serializer import FoodSerializer

class FoodListView(APIView):

    def get(self, _request):
        foods = Food.objects.all()
        serialized_foods = FoodSerializer(foods, many=True)
        return Response(serialized_foods.data, status=status.HTTP_200_OK)

    def post(self, request):
        print('REQUEST DATA->', request.data)
        food_to_add = FoodSerializer(data=request.data)
        if food_to_add.is_valid():
            food_to_add.save()
            print('FOOD TO ADD->', food_to_add.data)
            return Response(food_to_add.data, status=status.HTTP_201_CREATED)

class FoodDetailView(APIView):

    def get_food(self, pk):
        try:
            return Food.objects.get(pk=pk)
        except: Food.DoesNotExist
        raise NotFound(detail="🚨 Can't find that food")


    def get(self, _request, pk):
        food = self.get_food(pk=pk)
        serialized_food = FoodSerializer(food)
        return Response(serialized_food.data, status=status.HTTP_200_OK)

    def delete(self, _request, pk):
        food = self.get_food(pk=pk)
        food.delete()
        return Response(status=status.HTTP_202_ACCEPTED)

    def put(self, request, pk):
        food_to_edit = self.get_food(pk=pk)
        updated_food =FoodSerializer(food_to_edit, data=request.data)
        if updated_food.is_valid():
            updated_food.save()
            return Response(updated_food.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_food._errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)