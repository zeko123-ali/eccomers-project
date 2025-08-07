import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class allOrderService {
  private mytoken = localStorage.getItem('mytoken')!;

  constructor(private http: HttpClient) {}

  getUserOrders(id: string): Observable<any> {
    return this.http.get(`${environment.basurl}/api/v1/orders/user/${id}`
     
    );
  }
}
