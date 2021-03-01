from django.urls import path 
from . import views

app_name = 'pizza_api'

urlpatterns = [
    path('', views.PizzaList.as_view(), name = 'listcreate'),
    # path('<int:pk>/', views.PizzaDetail.as_view(), name='detailcreate' )
]