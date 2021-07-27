
from .common import FoodSerializer
from diets.serializers.common import DietSerializer

class PopulatedFoodSerializer(FoodSerializer):
    diets = DietSerializer(many=True)
