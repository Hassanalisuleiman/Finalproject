import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DisasterService } from '../../service/disaster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desaster',
  templateUrl: './desaster.component.html',
  styleUrl: './desaster.component.css'
})
export class DesasterComponent implements OnInit {
  submitForm!: FormGroup;
  post: any;

  constructor(private fb: FormBuilder, private disasterService:DisasterService,private router:Router){
    this.submitForm = this.fb.group({
      citizen_id: ['',],
      cause: ['',],
      effect: [''],
      
      
    });
  }

  ngOnInit(): void {
    
  }
  onSave():void{
    if(this.submitForm.valid){
      const submitdisaster = this.submitForm.value;
      console.log(submitdisaster);
      this.disasterService.post(submitdisaster).subscribe(
        Response =>{
          alert(Response);
          this.router.navigateByUrl('/desastershome');
          
        }, Error =>{
          alert(Error.error)
        }
      )
    }
  }

}
