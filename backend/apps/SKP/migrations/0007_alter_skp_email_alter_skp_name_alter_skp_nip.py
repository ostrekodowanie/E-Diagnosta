# Generated by Django 4.1.3 on 2022-11-13 00:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SKP', '0006_alter_skp_nip'),
    ]

    operations = [
        migrations.AlterField(
            model_name='skp',
            name='email',
            field=models.EmailField(max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='skp',
            name='name',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='skp',
            name='nip',
            field=models.CharField(max_length=10, unique=True),
        ),
    ]