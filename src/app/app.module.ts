import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AlphabetsOnlyValidatorDirective } from './vaidators/alphabets-only-validator.directive';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { DataComponentComponent } from './components/data-component/data-component.component';
import { AddBookComponent } from './components/add-book/add-book.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddUserComponent,
    HomePageComponent,
    AlphabetsOnlyValidatorDirective,
    DataComponentComponent,
    AddBookComponent

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
