import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AccountComponent } from './account/account.component';
import { InformationComponent } from './information/information.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {TooltipModule} from 'primeng/tooltip';
import {FileUploadModule} from 'primeng/fileupload';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    InformationComponent,
    ProfileComponent,
    PaymentComponent,
    CongratulationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    TooltipModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
