from django.db import models

class Food(models.Model): #Class called Food, but this will be general products
    name = models.CharField(max_length=50)
#diets is now type of product types: food, grow-your-own, wearables, first-aid 
    diets = models.ManyToManyField("diets.Diet", related_name= "foods")
    description = models.CharField(max_length=200, blank=True) #this is now DESCRIPTION
    image = models.CharField(max_length=500, blank=True) #this is now IMAGE
    price = models.SmallIntegerField

    def __str__(self):
        return f"{self.name} - {self.diets}"