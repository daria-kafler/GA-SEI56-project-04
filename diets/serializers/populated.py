
from .common import DietSerializer
from foods.serializers.populated import PopulatedFoodSerializer

class PopulatedDietSerializer(DietSerializer):
    foods = PopulatedFoodSerializer(many=True)

