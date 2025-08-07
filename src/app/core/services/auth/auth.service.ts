import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { jwtDecode } from "jwt-decode";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient, private router :Router) { }
userdata:any;

  signup(data:object):Observable<any>{
  return  this.httpClient.post(`${environment.basurl}/api/v1/auth/signup`,data)
  }
  signin(data:object):Observable<any>{
  return  this.httpClient.post(`${environment.basurl}/api/v1/auth/signin`,data)
  }

getuserdata():void{

this.userdata =jwtDecode( localStorage.getItem('mytoken')!)

console.log(this.userdata);

}


signout(){
  localStorage.removeItem("mytoken")

  this.userdata=null

   this.router.navigate(['./login'])
}




}
