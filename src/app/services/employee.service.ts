import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'  
})

export class EmployeeService {
  
    private url = environment.api;

    constructor(private httpClient: HttpClient){
}

getEmployees(){
    return this.httpClient.get<Employee[]>(this.url + '/employees');
}

}