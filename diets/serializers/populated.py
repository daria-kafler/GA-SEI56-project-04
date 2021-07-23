
from .common import DietSerializer
from foods.serializers.common import FoodSerializer

class PopulatedDietSerializer(DietSerializer):
    foods = FoodSerializer(many=True)

