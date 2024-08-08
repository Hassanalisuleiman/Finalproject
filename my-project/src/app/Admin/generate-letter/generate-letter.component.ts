import { Component } from '@angular/core';
import { LetterService } from '../../service/letter.service';

@Component({
  selector: 'app-generate-letter',
  templateUrl: './generate-letter.component.html',
  styleUrl: './generate-letter.component.css'
})
export class GenerateLetterComponent {
  selectedLetterType: any;
  organizationName: string | undefined;
  poBox: string | undefined;
  country: string;
  date: string;
  letterTemplates: any[];

  constructor(private letterService: LetterService) {
    this.letterTemplates = this.letterService.getLetterTemplates();
    this.country = this.letterService.getDefaultCountry();
    this.date = this.letterService.getDefaultDate();
  }

  onPrint() {
    if (this.selectedLetterType && this.organizationName && this.poBox) {
      const printContents = document.getElementById(this.selectedLetterType.template!)!.innerHTML;
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload();
    }
  }
}
