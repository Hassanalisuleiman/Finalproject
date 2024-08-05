import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-land-records',
  templateUrl: './land-records.component.html',
  styleUrl: './land-records.component.css'
})
export class LandRecordsComponent {
  landRecordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.landRecordForm = this.fb.group({
      from_owner: ['', Validators.required],
      to_owner: ['', Validators.required],
      boundary_north: ['', Validators.required],
      boundary_south: ['', Validators.required],
      boundary_east: ['', Validators.required],
      boundary_west: ['', Validators.required],
      form_number: ['', Validators.required],
      user_id: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.landRecordForm.valid) {
      console.log('Form Submitted', this.landRecordForm.value);
      // Here you would typically send the data to your backend or handle it accordingly
    }
  }

}
