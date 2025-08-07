import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  mytoken=localStorage.getItem('mytoken') !
  constructor(private readonly httpClient:HttpClient) { }

  checkoutsesion(id:string,shippingdata:object):Observable<any>{
  return this.httpClient.post(`${environment.basurl}/api/v1/orders/checkout-session/${id}?url=${window.location.origin}`,

{
    "shippingAddress": shippingdata
},{


 headers:{
   token: this.mytoken

 }




}

    )
  }
}
