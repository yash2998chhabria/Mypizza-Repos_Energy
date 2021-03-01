from django.urls import path 
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

app_name = 'pizza_api'

router.register('', views.PizzaList, basename='pizzacrud')

urlpatterns = [
    #     path('', views.PizzaList.as_view(), name = 'listcreate'),
    #     path('<int:pk>/', views.PizzaDetail.as_view(), name='detailcreate' )
]
urlpatterns += router.urls