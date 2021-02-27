from rest_framework import generics
from pizza.models import my_pizza
from .serializers import PizzaSerializer


class PizzaList(generics.ListCreateAPIView):
    queryset = my_pizza.objects.all()
    serializer_class = PizzaSerializer

class PizzaDetail(generics.RetrieveDestroyAPIView):
    queryset = my_pizza.objects.all()
    serializer_class = PizzaSerializer