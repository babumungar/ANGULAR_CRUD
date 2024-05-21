import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  
  handleError(error: any): void {
    console.error('error occurred handled globally:', error);
    //throw new Error('Method not implemented.');
    // if(error instanceof HttpErrorResponse){
    //   console.log('Response headers:', error.headers);
    // }
  }
 /*  myErrorHandler(error: any): void{
    console.log('error occurred handled globally:', error);
  } */

}
