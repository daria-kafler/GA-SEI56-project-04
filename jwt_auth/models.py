from django.db import models
from django.contrib.auth.models import AbstractUser


# django already has password & password confirmation & usernames
# doesnt make email required so want to change that
# by defining these fields we make them required

class User(AbstractUser):
    email = models.CharField(max_length=50, unique=True)
    name = models.CharField(max_length=50)
    dietary_requirements = models.ManyToManyField('diets.Diet', related_name='User', blank=True)
    profile_image = models.CharField(max_length=300, blank=True)


    def __str__(self):
        return f"{self.name}, {self.email}, {self.password}, {self.dietary_requirements}"