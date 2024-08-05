import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitizenService } from '../../service/citizen.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  submitForm!: FormGroup;
  post: any;

  constructor(private fb: FormBuilder, private citizenService: CitizenService, private router:Router) {
    this.submitForm = this.fb.group({
      fname: ['',],
      lname: ['',],
      street: [''],
      house_no: [''],
      gender: [''],
      phone_no: [''],
      zan_id: [''],
      tz_id: [''],
      date_of_birth: [''],
      photo: [null]
    });
   }

  ngOnInit(): void {
    
  }
  onSave():void{
    if(this.submitForm.valid){
      const submitcitizen = this.submitForm.value;
      console.log(submitcitizen);
      this.citizenService.post(submitcitizen).subscribe(
        Response =>{
          alert(Response);
          this.router.navigateByUrl('');
          
        }, Error =>{
          alert(Error.error)
        }
      )
    }
  }
  onFileChange(event: any): void{

  }

  // onFileChange(event: any): void {
  //   const file = event.target.files[0];
  //   this.submitForm.patchValue({ photo: file });
  // }

  // onSave(): void {
  //   if (this.submitForm.valid) {
  //     const formData = new FormData();
  //     Object.keys(this.submitForm.controls).forEach(key => {
  //       formData.append(key, this.submitForm.get(key)?.value);
  //     });

  //     this.citizenService.post(formData).subscribe(response => {
  //       console.log('Citizen data saved successfully', response);
  //     }, error => {
  //       console.error('Error saving citizen data', error);
  //     });
  //   }
  // }
  // onSave(){
  //   const value =this.submitForm.value;
  //   console.log(value)
  //   this.citizenService.post(value).subscribe((Response:any)=>{
  //     console.log(Response);
  //   },(HttpErrorResponse)=>{
  //     console.log(Error);
  //   })
  // }
}
