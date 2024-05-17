import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  
  handleError(error: any): void {
    console.error('An error occurred:', error);
    //throw new Error('Method not implemented.');
    // if(error instanceof HttpErrorResponse){
    //   console.log('Response headers:', error.headers);
    // }
  }
}
