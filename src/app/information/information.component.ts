import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  infoForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.infoForm = this.fb.group({
      name: [''],
      phone: ['', [Validators.required]],
      birYear: ['', [Validators.pattern('[0-9]')]],
      birMonth: ['', [Validators.pattern('[0-9]')]],
      birDate: ['', [Validators.pattern('[0-9]')]],
      city: ['', [Validators.required]],
      dist: ['', [Validators.required]],
      addressDetail: ['', [Validators.required]]
    });
  }
}
