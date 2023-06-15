import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../communs/service/employee.service';
import { Employee } from '../communs/entites/employee';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
})
export class ListEmployeesComponent implements OnInit {
  employeeData: Employee[] = [];

  constructor(private readonly employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeeService.getAll().subscribe(
      (res) => {
        this.employeeData = res;
        console.log(this.employeeData);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
