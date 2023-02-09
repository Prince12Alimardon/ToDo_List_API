from django.urls import path
from .views import TodoView, DetailTodo

urlpatterns = [
    path('', TodoView.as_view()),
    path('<int:pk>/', DetailTodo.as_view())
]
