import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactUsForm: FormGroup;
 
  constructor() { 
  this.createForm();
  }

  ngOnInit() {
  }
  createForm(){
    this.contactUsForm = new FormGroup({
      'userDetail': new FormGroup({
        'name': new FormControl(null, [Validators.required]),
              'email': new FormControl( null, [Validators.required]),
                // 'mobile': new FormControl(null, [Validators.required]),
                'message': new FormControl(null, [Validators.required])
              }),
      })
   
  }
  OnSubmit() {
    console.log(this.contactUsForm.value);
    alert(`Form Submitted Successfully !`)
  }
}