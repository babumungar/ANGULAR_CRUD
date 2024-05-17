import { Component, ErrorHandler, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalErrorHandlerService } from '../../services/global-error-handler.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any;
  constructor(private http: HttpClient, private errorHandler: GlobalErrorHandlerService) { }
  ngOnInit(): void {

    // this.http.get('https://localhost:9090/code/all')
    // .pipe(
    //   catchError((error) => {
    //     console.error('An error occurred:', error);
    //     // Optionally handle the error here, e.g., show an error message to the user
    //     return throwError('Something went wrong'); // Rethrow the error or return a default value
    //   })
    // )
    // .subscribe((data) => {
    //   this.employees = data;
    // });


    // let resp = this.http.get('https://localhost:9090/code/all');
    // resp.subscribe((data) => { this.employees = data; },
    //   (error) => {
    //     console.error('An error occurred:', error);
    //     // Handle error here, e.g., show an error message to the user
    //   }

    // )
  }

  // private handleError(error: any): void {
  //   // You can handle the error here or delegate it to the global error handler
  //   this.errorHandler.handleError(error);
  //alert('An error occurred while fetching data. Please try again later.');
  // }

 

}
