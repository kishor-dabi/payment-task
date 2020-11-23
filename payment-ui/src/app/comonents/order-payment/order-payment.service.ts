import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';

var httpServerUrl = "http://127.0.0.1:8000/"

function _window(): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class OrderPaymentService {

  constructor(@Inject(PLATFORM_ID) private platformId: object, private http:HttpClient) { }

  get nativeWindow(): any {
    if (isPlatformBrowser(this.platformId)) {
      return _window();
    }
  }

  createOrderPayment(data){      
    return this.http.post(httpServerUrl+'payment/create-order', data)
  }

  checkStatus(data){
    return this.http.post(httpServerUrl+'payment/check-payment-status', data)
  }


}