import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './Admin/home/home.component';
import { RegistrationComponent } from './Admin/registration/registration.component';
import { BirthHomeComponent } from './Admin/birth-home/birth-home.component';
import { BirthRegistrationComponent } from './Admin/birth-registration/birth-registration.component';
import { HomeAddresseeComponent } from './Admin/home-addressee/home-addressee.component';
import { AddAddresseeComponent } from './Admin/add-addressee/add-addressee.component';
import { HomeDeathComponent } from './Admin/home-death/home-death.component';
import { RecordDeathComponent } from './Admin/record-death/record-death.component';
import { DesastersHomeComponent } from './Admin/desasters-home/desasters-home.component';
import { DesasterComponent } from './Admin/desaster/desaster.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserhomeComponent } from './User/userhome/userhome.component';
import { EditHomeComponent } from './home/edit-home/edit-home.component';
import { LetterTemplateComponent } from './Admin/letter-template/letter-template.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LandRecordsComponent } from './Admin/land-records/land-records.component';
import { HomeLandComponent } from './Admin/home-land/home-land.component';
import { UraiaComponent } from './Admin/letterTemplate/uraia/uraia.component';
import { GenerateLetterComponent } from './Admin/generate-letter/generate-letter.component';



const routes: Routes = [

  // registration and login page routes

  {path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
    
  {
    path:'',component:MainLayoutComponent,children:
    [{path:'admin-dashboard',component:HomeComponent},
      {path:'reg', component:RegistrationComponent},
      {path:'birthhome',component:BirthHomeComponent},
      {path:'birthreg',component:BirthRegistrationComponent},
      {path:'homeAddressee',component:HomeAddresseeComponent},
      {path:'addaddressee',component:AddAddresseeComponent},
      {path:'homedeath',component:HomeDeathComponent},
      {path:'recorddeath',component:RecordDeathComponent},
      {path:'desastershome',component:DesastersHomeComponent},
      {path:'desasters',component:DesasterComponent},
      {path:'edit_home/:id',component:EditHomeComponent},
      {path:'LetterTemplate',component:LetterTemplateComponent},
      {path:'generate',component:GenerateLetterComponent},
      {path:'homeLand',component:HomeLandComponent},
      {path:'landrecord',component:LandRecordsComponent},
      

    ]
    // citzen dashbord start hire

  },
  // barua
  {path:'uraia',component:UraiaComponent},

  // citizen
  {path:'citizen-dashboard',component:UserDashboardComponent,children:
    [{path:'userhome',component:UserhomeComponent},

    ]
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
