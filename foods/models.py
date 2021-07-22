from django.db import models

class Food(models.Model):
    name = models.CharField(max_length=50)
    calories = models.PositiveSmallIntegerField(blank=True)
    protein = models.PositiveSmallIntegerField(blank=True)
    dietary_note = models.ManyToManyField('diets.Diet', related_name= 'Food', blank=True)

    def __str__(self):
        return f"{self.name} - {self.dietary_note}"