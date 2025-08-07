import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CatgrsService {

  constructor(private httpClient:HttpClient) { }


getcategories():Observable<any>{


 return this.httpClient.get(`${environment.basurl}/api/v1/categories`)
}
getspccategories(id:string):Observable<any>{


 return this.httpClient.get(`${environment.basurl}/api/v1/categories/${id}`)
}




}
