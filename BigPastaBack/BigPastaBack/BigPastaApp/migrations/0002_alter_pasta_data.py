# Generated by Django 4.0.1 on 2022-01-10 16:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BigPastaApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pasta',
            name='Data',
            field=models.DateTimeField(auto_now=True),
        ),
    ]