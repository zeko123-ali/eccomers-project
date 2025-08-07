import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {




  constructor(private httpClient:HttpClient) { }
    mytoken=localStorage.getItem('mytoken') !


    numberincart:BehaviorSubject<number>=new BehaviorSubject(0)

  addproudcttocart(id:string):Observable<any>{
    return this.httpClient.post(`${environment.basurl}/api/v1/cart`,{
       "productId": id
    }
  
  
  )
  }

  getusercard():Observable<any>{
    return this.httpClient.get(`${environment.basurl}/api/v1/cart`,
     
    )

  }
  removespiitem(id:string):Observable<any>{
return this.httpClient.delete(`${environment.basurl}/api/v1/cart/${id}`,
 
)
  }
updatuecartproduct(quantity:any,  id:string):Observable<any>{
return this.httpClient.put(`${environment.basurl}/api/v1/cart/${id}`,
{
    "count": quantity
},
 
)
  }
getclearcart():Observable<any>{
    return this.httpClient.delete(`${environment.basurl}/api/v1/cart`
    
  
  
  )
  }
     
  
 
}
