import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderPaymentComponent } from './comonents/order-payment/order-payment.component';
import { OrderPaymentService } from './comonents/order-payment/order-payment.service';
import { SuccessComponent } from './comonents/success/success.component';

const routes: Routes = [

  { path: 'order', component: OrderPaymentComponent },
  { path: 'success-payment', component: SuccessComponent },
  { path: '',   redirectTo: '/order', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
