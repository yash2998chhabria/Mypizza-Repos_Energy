from rest_framework import viewsets
from pizza.models import my_pizza
from .serializers import PizzaSerializer


class Pizza(viewsets.ModelViewSet):
    queryset = my_pizza.objects.all()
    serializer_class = PizzaSerializer

# class PizzaDetail(generics.RetrieveDestroyAPIView):
#     queryset = my_pizza.objects.all()
#     serializer_class = PizzaSerializer