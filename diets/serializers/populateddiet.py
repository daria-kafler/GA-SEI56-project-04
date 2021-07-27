
from .common import DietSerializer
from foods.serializers.common import FoodSerializer

class PopulatedDietFoodSerializer(DietSerializer):
    foods = FoodSerializer(many=True)

