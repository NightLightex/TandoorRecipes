# Generated by Django 3.2.11 on 2022-01-20 22:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cookbook', '0166_alter_userpreference_shopping_add_onhand'),
    ]

    operations = [
        migrations.AddField(
            model_name='userpreference',
            name='left_handed',
            field=models.BooleanField(default=False),
        ),
    ]
