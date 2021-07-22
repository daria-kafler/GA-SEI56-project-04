import rest_framework
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Diet
from .serializer import DietSerializer

class DietListView(APIView):

    def get(self, _request):
        diets = Diet.objects.all()
        serialized_diets = DietSerializer(diets, many=True)
        return Response(serialized_diets.data, status=status.HTTP_200_OK)