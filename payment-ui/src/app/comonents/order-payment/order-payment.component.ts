import { Component, OnInit } from '@angular/core';
import { OrderPaymentService } from './order-payment.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-order-payment',
  templateUrl: './order-payment.component.html',
  styleUrls: ['./order-payment.component.scss'],
  providers: [OrderPaymentService]
})
export class OrderPaymentComponent implements OnInit {

  data:Object = {}

  constructor(private orderPaymentService :OrderPaymentService, private router:Router) { }

  ngOnInit(): void {
    this.data = {
      "amount":2000,
      "currency":"INR",
      "receipt":"1"
    }

  }

  pay(){    
    this.orderPaymentService.createOrderPayment(this.data).subscribe((data: any) => {
      console.log(data);
      this.payWithRazor(data)
      
    });


  }

  payWithRazor(val) {
    const options: any = {
      key: 'rzp_test_D2Q7B9zYiuWllP',
      amount: val.amount,
      currency: 'INR',
      name: 'testing ', 
      description: 'this is testing description', 
      image: './assets/logo.png', 
      order_id: val.id, 
      modal: {
        escape: false,
      },
      notes: {
      },
      theme: {
        color: '#0c238a'
      }
    };
    options.handler = ((response, error) => {
      options.response = response;
      this.checkPaymentStatus(options)
    });
    options.modal.ondismiss = (() => {
      console.log('Transaction cancelled.');
    });
    const rzp = new this.orderPaymentService.nativeWindow.Razorpay(options);
    rzp.open();
  }


  checkPaymentStatus(data){    
    this.orderPaymentService.checkStatus(data).subscribe((data: any) => {
      if (data) {
        this.router.navigate(['/success-payment'])
      }
      
    });
  }

}
