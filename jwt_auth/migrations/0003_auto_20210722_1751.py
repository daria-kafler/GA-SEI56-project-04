# Generated by Django 3.2.5 on 2021-07-22 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('diets', '0001_initial'),
        ('jwt_auth', '0002_auto_20210722_1730'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='dietary_requirements',
            field=models.ManyToManyField(default=None, related_name='User', to='diets.Diet'),
        ),
        migrations.AlterField(
            model_name='user',
            name='profile_image',
            field=models.CharField(blank=True, max_length=300),
        ),
    ]
