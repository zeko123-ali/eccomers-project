import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProudctService {

  constructor(private httpClient:HttpClient) { }


   getproudcts():Observable<any>{

 return this.httpClient.get(`${environment.basurl}/api/v1/products`)
  

   }
   getspicprod(id:string):Observable<any>{

 return this.httpClient.get(`${environment.basurl}/api/v1/products/${id}`)
  

   }




 
}
