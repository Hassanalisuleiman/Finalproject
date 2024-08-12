import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MatExpansionModule } from '@angular/material/expansion';

import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import {HomeComponent} from './Admin/home/home.component';
import {RegistrationComponent} from './Admin/registration/registration.component';
import { BirthHomeComponent } from './Admin/birth-home/birth-home.component';
import { BirthRegistrationComponent } from './Admin/birth-registration/birth-registration.component';
import { HomeAddresseeComponent } from './Admin/home-addressee/home-addressee.component';
import { AddAddresseeComponent } from './Admin/add-addressee/add-addressee.component';
import { HomeDeathComponent } from './Admin/home-death/home-death.component';
import { RecordDeathComponent } from './Admin/record-death/record-death.component';
import { DesastersHomeComponent } from './Admin/desasters-home/desasters-home.component';
import { DesasterComponent } from './Admin/desaster/desaster.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { UserhomeComponent } from './User/userhome/userhome.component'; 
import { HttpClientModule } from '@angular/common/http';
import { EditHomeComponent } from './home/edit-home/edit-home.component';
import { LetterTemplateComponent } from './Admin/letter-template/letter-template.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';

// interceptor
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LandRecordsComponent } from './Admin/land-records/land-records.component';
import { HomeLandComponent } from './Admin/home-land/home-land.component';
import { UraiaComponent } from './Admin/letterTemplate/uraia/uraia.component';
import { GenerateLetterComponent } from './Admin/generate-letter/generate-letter.component';
import { AdminPageComponent } from './Admin/admin-page/admin-page.component';
import { RegisterShehaComponent } from './components/register-sheha/register-sheha.component';
import { WelcomeComponent } from './components/welcome/welcome.component';





@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomeComponent,
    RegistrationComponent,
    BirthHomeComponent,
    BirthRegistrationComponent,
    HomeAddresseeComponent,
    AddAddresseeComponent,
    HomeDeathComponent,
    RecordDeathComponent,
    DesastersHomeComponent,
    DesasterComponent,
    UserDashboardComponent,
    UserhomeComponent,
    EditHomeComponent,
    LetterTemplateComponent,
    RegisterComponent,
    LoginComponent,
    LandRecordsComponent,
    HomeLandComponent,
    UraiaComponent,
    GenerateLetterComponent,
    AdminPageComponent,
    RegisterShehaComponent,
    WelcomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatMenuModule,
   
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
