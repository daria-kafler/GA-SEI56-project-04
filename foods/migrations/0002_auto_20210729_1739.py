# Generated by Django 3.2.5 on 2021-07-29 17:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('foods', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='food',
            name='price',
            field=models.SmallIntegerField(blank=True, default=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='food',
            name='type',
            field=models.CharField(default='Wearables', max_length=50),
            preserve_default=False,
        ),
    ]