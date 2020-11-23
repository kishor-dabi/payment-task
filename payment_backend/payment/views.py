from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework import status
import razorpay
client = razorpay.Client(auth=("rzp_test_D2Q7B9zYiuWllP", "scQ9KQYVWsgR4WybDWiiaGn1"))
client.set_app_details({"title" : "<YOUR_APP_TITLE>", "version" : "<YOUR_APP_VERSION>"})

# Create your views here.


class OrderCreateView(CreateAPIView):

    def post(self, request):
        order = None
        response = None
        try:
            order = client.order.create(data=request.data)
        except Exception as e:
            print(e)

        payment_obj = client.order.payments(order['id'])
      
        return Response(order, status=200)



class CheckPaymentStatusView(CreateAPIView):

    def post(self, request):
        request_data = request.data
        response = None
        response = client.payment.fetch(request_data['response']["razorpay_payment_id"])
        return Response(response, status=200)
