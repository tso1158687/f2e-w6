import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { InformationComponent } from './information/information.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';

const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'information', component: InformationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'congratulations', component: CongratulationsComponent },
  {path: '', redirectTo: '/account', pathMatch: 'full'},
  { path: '**', component: AccountComponent }
];
// accuont
// information
// profile
// payment
// congratulations
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
