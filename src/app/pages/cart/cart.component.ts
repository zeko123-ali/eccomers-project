import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart/cart.service';
import { Icart } from '../../shared/interface/icart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
private cartService=inject(CartService)
cartdeatiles:Icart={} as Icart

ngOnInit(): void {
  this.cartService.getusercard().subscribe({
    next:(res)=>{
      console.log(res.data);
      this.cartdeatiles=res.data
      

    },
    error:(err)=>{
      console.log(err);
      

    }
  })
}
removeitem(id:string): void{

  this.cartService.removespiitem(id).subscribe({
    next:(res)=>{
      console.log(res);
      this.cartdeatiles=res.data
      this.cartService.numberincart.next(res.numOfCartItems)
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })

}
updautcart(quantity:any,id:string): void{

  this.cartService.updatuecartproduct(quantity,id).subscribe({
    next:(res)=>{
      console.log(res);
      this.cartdeatiles=res.data
       this.cartService.numberincart.next(res.numOfCartItems)
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })

}
clearcart(): void{

  this.cartService.getclearcart().subscribe({
    next:(res)=>{
      console.log(res);
     this.cartdeatiles={}as Icart
      this.cartService.numberincart.next(0)
    },
    error:(err)=>{
      console.log(err);
      
    }
  })

}

}
