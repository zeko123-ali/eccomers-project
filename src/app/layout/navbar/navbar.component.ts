import { Component, input, OnInit } from '@angular/core';

import { initFlowbite } from 'flowbite';
import { FlowbitService } from '../../core/services/flowbit/flowbit.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { CartService } from '../../core/services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

numberinnav:number=0

  constructor(private flowbitService: FlowbitService,public authService:AuthService,private cartService:CartService) {}

islogin=input<boolean>(true)


  ngOnInit(): void {

    this.flowbitService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
    // this.cartService.numberincart=this.numberinnav
    this.cartService.numberincart.subscribe({
      next:(value)=>{
        this.numberinnav=value
      }
    })

      this.cartService.getusercard().subscribe({
      next:(res)=>{
        console.log(res);
        this.cartService.numberincart.next(res.numOfCartItems)
       
      },
      error:(err)=>{
        console.log(err);
        
       
      }
    })
   
    
  }

}
