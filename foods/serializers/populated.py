
from .common import FoodSerializer
from diets.serializers.populated import PopulatedDietSerializer

class PopulatedFoodSerializer(FoodSerializer):
    diets = PopulatedDietSerializer(many=True)
