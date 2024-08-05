// src/app/components/citizen-list/citizen-list.component.ts

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CitizenService } from '../../service/citizen.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  citizens: any[] = [];

  constructor(private citizenService: CitizenService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCitizens();
  }
  getAllCitizens(){
    this.citizenService.getAll().subscribe((data: any[]) => {
      this.citizens = data;
    });
  }

  editCitizen(citizen: any): void {
    this.router.navigateByUrl('/edit_home/', citizen.id);
  }

  deleteCitizen(id: number): void {
    this.citizenService.deleteById(id).subscribe(() => {
      this.getAllCitizens();   //refresh the page
      this.citizens = this.citizens.filter(c => c.id !== id);
    });
  }
  onAddPerson(){
    this.router.navigateByUrl('/reg');
  }

}