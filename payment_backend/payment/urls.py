from django.contrib import admin
from django.urls import path
from .views import OrderCreateView, CheckPaymentStatusView

urlpatterns = [
    path('create-order', OrderCreateView.as_view()),
    path('check-payment-status', CheckPaymentStatusView.as_view()),
    
]
