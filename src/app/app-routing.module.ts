import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EmployeeComponent } from './components/employee/employee.component';
import {AddUserComponent } from './components/add-user/add-user.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { DataComponentComponent } from './components/data-component/data-component.component';

const routes: Routes = [
    // {path:"", component:HomePageComponent},
    // {path:"show-employees", component:EmployeeComponent},
    {path:"add-user", component:AddUserComponent},
    {path:"add-book", component:AddBookComponent},
    {path:"data-component", component:DataComponentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
