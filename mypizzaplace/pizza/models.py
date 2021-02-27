from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.
def upload_to(instance,filename):
    return 'pizzas/{filename}'.format(filename=filename)

class my_pizza(models.Model):
    CATEGORY_CHOICES = [
        ('Veg','Veg'),
        ('Nonveg', 'Nonveg')
    ]
    BASE_CHOICES = [
        ('Thin Crust','Thin Crust'),
        ('Regular Base','Regular Base'),
        ('Flat Bread','Flat Bread'),
        ('Multigrain','Multigrain')
    ]
    CHEESSE_TYPE_CHOICES = [
        ('Cheese Burst', 'Cheese Burst'),
        ('Cheese Topping', 'Cheese Topping'),
        ('No Cheese', 'No Cheese')
    ]

    name =  models.CharField(max_length=100, blank=False, null=False, unique=True)
    category =  models.CharField(max_length=10, choices=CATEGORY_CHOICES, blank=False, null=False)
    base =  models.CharField(max_length=15, choices=BASE_CHOICES, blank=False, null=False)
    cheese_type =  models.CharField(max_length=15, choices=CHEESSE_TYPE_CHOICES, blank=False, null=False)
    price= models.IntegerField(null=False,blank=False)
    picture = models.ImageField(_("Image"), upload_to=upload_to,default='pizzas/default.jpeg')
    
    def __str__(self):
        return self.name