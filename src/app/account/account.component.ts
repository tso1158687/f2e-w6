import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  // 1.先將表單參考進來
  accountForm: FormGroup;
  constructor(
    // 2.建立表單類別
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // 3.初始化表格
    this.initForm();
  }
  initForm() {
    // 4.將表格實體化
    this.accountForm = this.fb.group({
      account: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required]],
      repassword: ['', [Validators.required]]
    });
  }
}
