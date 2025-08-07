
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgotService {

  constructor(private httpClient: HttpClient) {}

  forgotpass(data: any): Observable<any> {
    return this.httpClient.post(`${environment.basurl}/api/v1/auth/forgotPasswords`, data);
  }

  verifyrestcode(data: any): Observable<any> {
    return this.httpClient.post(`${environment.basurl}/api/v1/auth/verifyResetCode`, data);
  }

  resetpass(data: any): Observable<any> {
    return this.httpClient.put(`${environment.basurl}/api/v1/auth/resetPassword`, data);
  }
}

