import { Component, OnInit } from '@angular/core';
import { BirthService } from '../../service/birth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-birth-registration',
  templateUrl: './birth-registration.component.html',
  styleUrl: './birth-registration.component.css'
})
export class BirthRegistrationComponent implements OnInit {
  submitForm!: FormGroup;
  post: any;

  constructor(private fb:FormBuilder, private birthService: BirthService, private router:Router){
    this.submitForm = this.fb.group({
      father_name: ['',],
      mother_name : ['',],
      child_name: [''],
      date_of_birth: [''],
      merit_status: [''],
      citizen_id: ['']
      
    });
  }




  ngOnInit(): void {
      
  }
  onSave():void{
    if(this.submitForm.valid){
      const submitbirth = this.submitForm.value;
      console.log(submitbirth);
      this.birthService.post(submitbirth).subscribe(
        Response =>{
          alert(Response);
          this.router.navigateByUrl('/birthhome');
          
        }, Error =>{
          alert(Error.error)
        }
      )
    }
  }

}
