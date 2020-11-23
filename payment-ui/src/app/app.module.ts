import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderPaymentComponent } from './comonents/order-payment/order-payment.component';
import { HttpClientModule } from '@angular/common/http';
import { SuccessComponent } from './comonents/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderPaymentComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
