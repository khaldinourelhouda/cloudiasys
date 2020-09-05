import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
   } from '@angular/common/http';
   import { Observable, throwError } from 'rxjs';
   import { retry, catchError } from 'rxjs/operators';
   import swal from "sweetalert2";
   
   export class HttpErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request)
        .pipe(
          retry(1),
          catchError((error: HttpErrorResponse) => {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
              // client-side error
              errorMessage = `Error: ${error.error.error.message}`;
            } else {
              // server-side error
              //errorMessage = `Error Code: ${error.status}\nMessage1: ${error.error.error.message}\nMessage: ${error.message}`;
              errorMessage = `Message: ${error.error.error.message}`;
            }
            /*window.alert(errorMessage);*/
            swal.fire({
                        
                icon: 'error',
                title: errorMessage,
                showConfirmButton: true,
                
              })
              
            return throwError(errorMessage);
          })
        )
    }
   }