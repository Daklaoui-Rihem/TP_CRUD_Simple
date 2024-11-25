import { Component } from '@angular/core';
 import { EmployeeService } from '../app/employee.service';
 import { Employee } from '../app/employee';
 @Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
 })
 export class AppComponent {
  itle = 'app';
 employees = new Array<Employee>();
 constructor(empService:EmployeeService) {
 empService.getEmployees().subscribe(response =>this.employees= response )
 }
 }