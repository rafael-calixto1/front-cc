import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { EmployeeService } from './services/employee.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tutoriais';

  constructor(private employeeService : EmployeeService){
    console.log('To aqui', environment.api)
  }

  getEmployees(){
    
  }
}
