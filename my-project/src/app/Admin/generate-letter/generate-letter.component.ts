import { Component, OnInit } from '@angular/core';
import { LetterService } from '../../service/letter.service';
import { AddresseeService } from '../../service/addressee.service';
import { ShehiaService } from '../../service/shehia.service';
import { PrintedletterService } from '../../service/printedletter.service';

@Component({
  selector: 'app-generate-letter',
  templateUrl: './generate-letter.component.html',
  styleUrls: ['./generate-letter.component.css']
})
export class GenerateLetterComponent implements OnInit {
  selectedLetterType: any;
  selectedAddressee: any;
  organizationName: string | undefined;
  poBox: string | undefined;
  country: string;
  date: string;
  letterTemplates: any[];
  
  additionalName: string | undefined;
  isSubmitted: boolean = false;
  addressees: any[] = [];
  shehias: any[] = []; // Array to hold shehia data
  firstName: string = '';
  lastName: string = '';
  houseNo: string = '';
  phoneNo: string = '';
  shehiaValue: string = ''; // To hold the shehia value based on ID

  constructor(
    private letterService: LetterService, 
    private addresseeService: AddresseeService, 
    private shehiaService: ShehiaService,
    private printedletterservice: PrintedletterService,
  ) {
    this.letterTemplates = this.letterService.getLetterTemplates();
    this.country = this.letterService.getDefaultCountry();
    this.date = this.letterService.getDefaultDate();
  }

  ngOnInit(): void {
    this.loadAddressees();
    this.loadShehias();
  
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log('User data from local storage:', user);
    this.firstName = user?.first_name || 'User';
    this.lastName = user?.last_name || '';
    this.houseNo = user?.house_no || '';
    this.phoneNo = user?.phone_no || '';
    
    // Log shehia_id and shehias array for verification
    console.log('Shehia ID from user data:', user?.shehia_id);
    console.log('Shehias array:', this.shehias);
  
    this.setShehiaValue(user?.shehia_id || 0); // Ensure a number is passed
  }
  
  

  loadAddressees() {
    this.addresseeService.getAddressees().subscribe(
      (data: any[]) => {
        this.addressees = data;
      },
      (error) => {
        console.error('Error fetching addressees:', error);
      }
    );
  }

  loadShehias() {
    this.shehiaService.getAllShehias().subscribe(
      (data: any[]) => {
        this.shehias = data;
        console.log('Shehias data:', this.shehias); // Add this line to verify the data
      },
      (error) => {
        console.error('Error fetching shehias:', error);
      }
    );
  }
  

  setShehiaValue(shehiaId: number) {
    // Convert the shehiaId from local storage to a number
    shehiaId = Number(shehiaId);
    const shehia = this.shehias.find(s => s.shehia_id === shehiaId); // Use shehia_id for comparison
    this.shehiaValue = shehia ? shehia.shehia_name : 'Unknown';
  }
  
  

  onAddresseeChange() {
    if (this.selectedAddressee) {
      this.organizationName = this.selectedAddressee.organizationName;
      this.poBox = this.selectedAddressee.poBox;
      this.country = this.selectedAddressee.country || this.country;
    }
  }

  onSubmit() {
    if (this.selectedLetterType && this.organizationName && this.poBox) {
      this.isSubmitted = true;
    }
  }

  onPrint() {
    if (this.isSubmitted) {
      const printContents = document.getElementById(this.selectedLetterType.template!)!.innerHTML;
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;

      if (this.selectedLetterType.name === 'Passport Request Letter' && this.additionalName) {
        document.body.innerHTML = document.body.innerHTML.replace('..................................................................', this.additionalName);
      }

      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload();

      // Capture and send data to backend
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const printData = {
        templateName: this.selectedLetterType.name,
        userName: `${this.firstName} ${this.lastName}`,
        organizationName: this.organizationName,
        shehiaName: this.shehiaValue,
        dateTime: new Date().toISOString() // Current date and time
      };

      this.printedletterservice.createPrintedLetter(printData).subscribe(
        response => console.log('Print data saved successfully', response),
        error => console.error('Error saving print data', error)
      );
    }
  }
}
