from rest_framework import serializers
from pizza.models import my_pizza

class PizzaSerializer(serializers.ModelSerializer):
    class Meta:
        model = my_pizza
        fields = '__all__'