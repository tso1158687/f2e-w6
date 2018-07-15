import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.paymentForm = this.fb.group({
      number: ['', [Validators.required]],
      name: ['', [Validators.required]],
      bank: ['', [Validators.required]],
      CVV: ['', [Validators.required]],
      MM: ['', [Validators.required]],
      DD: ['', [Validators.required]]
      // name: [''],
      // phone: ['', [Validators.required]],
      // birYear: ['', [Validators.pattern('[0-9]')]],
      // birMonth: ['', [Validators.pattern('[0-9]')]],
      // birDate: ['', [Validators.pattern('[0-9]')]],
      // city: ['', [Validators.required]],
      // dist: ['', [Validators.required]],
      // addressDetail: ['', [Validators.required]]
    });
  }
}
