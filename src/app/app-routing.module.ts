import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListEmployeesComponent },
  { path: 'add', component: AddEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
