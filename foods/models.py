from django.db import models

class Food(models.Model):
    name = models.CharField(max_length=50, unique=True)
    calories = models.PositiveSmallIntegerField(blank=True)
    protein = models.PositiveSmallIntegerField(blank=True)
    diets = models.ManyToManyField("diets.Diet", related_name= "foods")
    amount_in_grams = models.PositiveSmallIntegerField

    def __str__(self):
        return f"{self.name} - {self.diets}"