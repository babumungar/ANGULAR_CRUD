import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AlphabetsOnlyValidatorDirective } from './vaidators/alphabets-only-validator.directive';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    HomePageComponent,
    AlphabetsOnlyValidatorDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule,HttpClientModule,
  ],
  providers: [{provide: ErrorHandler, useClass: GlobalErrorHandlerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
