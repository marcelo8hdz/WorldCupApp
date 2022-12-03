# Generated by Django 4.1.2 on 2022-10-21 18:33

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_historicalgame_hist_game_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='historicalgame',
            name='hist_Game_ID',
            field=models.AutoField(default=datetime.datetime(2022, 10, 21, 18, 33, 58, 458166), editable=False, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='prediction',
            name='game',
            field=models.OneToOneField(default=datetime.datetime(2022, 10, 21, 18, 33, 58, 458864), on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='api.worldcupgame'),
        ),
        migrations.AlterField(
            model_name='team',
            name='team_ID',
            field=models.AutoField(default=datetime.datetime(2022, 10, 21, 18, 33, 58, 457710), editable=False, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='user',
            name='user_ID',
            field=models.AutoField(default=100000, editable=False, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='vote',
            name='vote_ID',
            field=models.AutoField(default=datetime.datetime(2022, 10, 21, 18, 33, 58, 461292), editable=False, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='worldcupgame',
            name='world_cup_game_ID',
            field=models.AutoField(default=datetime.datetime(2022, 10, 21, 18, 33, 58, 458434), editable=False, primary_key=True, serialize=False),
        ),
    ]
