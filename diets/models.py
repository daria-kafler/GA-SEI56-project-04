from django.db import models

class Diet(models.Model): #models is now types of products
    #types: food, grow-your-own, wearables, first-aid 
    name = models.CharField(max_length=50)


    def __str__(self):
        return f"{self.name}"