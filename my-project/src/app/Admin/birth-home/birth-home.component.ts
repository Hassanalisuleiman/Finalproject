import { Component, OnInit } from '@angular/core';
import { BirthService } from '../../service/birth.service';

@Component({
  selector: 'app-birth-home',
  templateUrl: './birth-home.component.html',
  styleUrl: './birth-home.component.css'
})
export class BirthHomeComponent implements OnInit {
  displayedColumns: string[] = ['id','father_name','mother_name','child_name','date_of_birth','merit_status'];
  birthRecords:any

  constructor(private birthservice: BirthService){}

  ngOnInit(): void {
   this.getAllBirth();
  }

  getAllBirth(){
    this.birthservice.getAll().subscribe((response:any)=>{
      this.birthRecords = response;
      console.table(response);
      
    })
  }
  deleteBirth(id: number): void {
    this.birthRecords.deleteById(id).subscribe(() => {
      this.getAllBirth(); // Refresh the list
    });
  }

}
