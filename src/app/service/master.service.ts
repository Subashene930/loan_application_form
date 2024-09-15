import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiResponseModel, Application, Loan } from '../model/application.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  //applications: any;
  
    private applications: Application[] = [];
    private loans: Loan[] = [];
  constructor( private http: HttpClient) { }


  addNewApplication(obj : Application): Observable<apiResponseModel>{
    return this.http.post<apiResponseModel>('https://projectapi.gerasim.in/api/Loan/AddNewApplication',obj);
  }



  createApplication(application: Application): Observable<apiResponseModel> {
   application.applicantID = this.applications.length + 1;
    console.log(application)
    this.applications.push(application);
    console.log("push",this.applications.push(application))
    const response: apiResponseModel = {
      message: 'Application created successfully',
      result: true,
      data: application
    };
    return of(response);
  }
}
