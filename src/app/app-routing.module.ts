import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [
    // {path:"", component:HomePageComponent},
    {path:"show-employees", component:EmployeeComponent},
    {path:"add-employee", component:AddEmployeeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
