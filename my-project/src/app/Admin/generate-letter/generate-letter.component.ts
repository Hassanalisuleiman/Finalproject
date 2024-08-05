// src/app/components/generate-letter/generate-letter.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



import { AddresseeService } from '../../service/addressee.service';
import { LetterTemplateService } from '../../service/letter-template.service';
import { LetterService } from '../../service/letter.service';

@Component({
  selector: 'app-generate-letter',
  templateUrl: './generate-letter.component.html',
  styleUrls: ['./generate-letter.component.css']
})
export class GenerateLetterComponent implements OnInit {
  letterForm: FormGroup;
  addressees: any[] = [];
  templates: any[] = [];

  constructor(
    private fb: FormBuilder,
    private addresseeService: AddresseeService,
    private templateService: LetterTemplateService,
    private letterService: LetterService
  ) {
    this.letterForm = this.fb.group({
      citizen_id: ['', Validators.required],
      addressee_id: ['', Validators.required],
      template_id: ['', Validators.required],
      title: ['', Validators.required],
      photo: [''],
      user_id: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadAddressees();
    this.loadTemplates();
  }

  loadAddressees() {
    this.addresseeService.getAddressees().subscribe(data => {
      this.addressees = data;
    });
  }

  loadTemplates() {
    this.templateService.getLetterTemplates().subscribe(data => {
      this.templates = data;
    });
  }

  onSubmit() {
    if (this.letterForm.valid) {
      this.letterService.generateLetter(this.letterForm.value).subscribe(response => {
        console.log('Letter generated:', response);
        this.letterForm.reset();
      });
    }
  }
}

