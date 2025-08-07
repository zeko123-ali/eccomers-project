import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

 constructor(private httpClient:HttpClient) { }


   getprand():Observable<any>{

 return this.httpClient.get(`${environment.basurl}/api/v1/brands`)
  

   }
   getspicprand(id:string):Observable<any>{

 return this.httpClient.get(`${environment.basurl}/api/v1/brands/${id}`)
  

   }
}





