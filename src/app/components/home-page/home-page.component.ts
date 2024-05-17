import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalErrorHandlerService } from '../../services/global-error-handler.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  private baseUrl = "https://jsonplaceholder.typicode.com/posts";
  //private baseUrl = "http://localhost:9090/booksproject/getAll"
  employees: any;
  constructor(private router: Router, private http: HttpClient, private errorHandler: GlobalErrorHandlerService) { }
  ngOnInit(): void {

  }

  addUser() {
    this.router.navigate(['/add-employee']); // Adjust the route as necessary
  }

  showData() {

    this.http.get(this.baseUrl).subscribe(
      // (data:any) => {
      //   console.log(data)
      // }

      {
        next: (data: any) => {
          console.log(data);
        },
        error: (err: any) => {
          //console.log(err);
          // if(err.status === 404){
          //   console.log('error encountered', err.statusText);
          // }

          this.errorHandler.handleError(err);//global error handling


        }
      }

    )


    // this.http.get('https://jsonplaceholder.typicode.com/pots')
    //   .pipe(
    //     catchError((error) => {
    //       console.log('An error occurred:', error);
    //       // Optionally handle the error here, e.g., show an error message to the user
    //        throw new Error("some thing wrong"); // Rethrow the error or return a default value
    //     })
    //   )
    //   .subscribe((data) => {
    //     this.employees = data;
    //     console.log(this.employees);
    //   });


    //this.router.navigate(['/show-employees']); // Adjust the route as necessary

  }

}
function throwError(arg0: string): any {
  throw new Error('Function not implemented.');
}

