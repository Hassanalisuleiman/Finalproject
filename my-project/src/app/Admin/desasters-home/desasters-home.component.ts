import { Component, OnInit } from '@angular/core';
import { DisasterService } from '../../service/disaster.service';

@Component({
  selector: 'app-desasters-home',
  templateUrl: './desasters-home.component.html',
  styleUrl: './desasters-home.component.css'
})
export class DesastersHomeComponent implements OnInit {
  disasters: any[] = [];
  router: any;
  constructor(private disasterService:DisasterService){}

  ngOnInit(): void {
    this.getAllDisaster();
  }
  getAllDisaster(){
    this.disasterService.getAll().subscribe((data: any[]) => {
      console.log('data zangu',data);
      this.disasters = data;
    });
  }

  editCitizen(citizen: any): void {
    this.router.navigateByUrl('/edit_home/', citizen.id);
  }

  deleteDesaster(id: number): void {
    this.disasterService.deleteById(id).subscribe(() => {
      this.getAllDisaster();   //refresh the page
      this.disasters = this.disasters.filter(c => c.id !== id);
    });
  }
  onAddPerson(){
    this.router.navigateByUrl('/reg');
  }

}
