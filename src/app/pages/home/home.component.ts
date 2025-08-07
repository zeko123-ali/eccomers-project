

import { CatgrsService } from './../../core/services/catag/catgrs.service';
import { Component, inject,  OnInit } from '@angular/core';
import { ProudctService } from '../../core/services/product/proudct.service';
import { Iproduct } from '../../shared/interface/iproduct';
import { error } from 'console';
import { Icateg } from '../../shared/interface/icateg';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { SercPipe } from '../../shared/pipes/serc.pipe';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-home',
  imports: [CarouselModule,RouterLink,SercPipe,FormsModule],
 
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {


private readonly  proudctService= inject(ProudctService)
  private  readonly    catgrsService=inject(CatgrsService)
  private  readonly   cartService=inject(CartService)
  private  readonly   toastrService=inject(ToastrService)
 
  
  


myprodut:Iproduct[]=[]
mycatg:Icateg[]=[]
searchitem:string=""


 customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }


marktOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
   items:1,
    nav: true
  }
  

callproduct(){
   this.proudctService.getproudcts().subscribe({
    next:(res)=>{
      console.log(res.data);
      this.myprodut=res.data
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}



callcatg(){
  this.catgrsService.getcategories().subscribe({
  next: (res)=>{
    console.log(res.data);
    this.mycatg=res.data
    
  },
 
  error: (err)=>{
    console.log(err);
    
  }
  
   })
}











ngOnInit(): void {
 
this.callproduct()

this.callcatg()
}

addproducttocart(id:string):void{

 
  this.cartService.addproudcttocart(id).subscribe({
    next:(res)=>{
      console.log(res);
        this.toastrService.success(res.message, "res.titel");
        this.cartService.numberincart.next(res.numOfCartItems)

        

    },
    error:(err)=>{
      console.log(err);
      

    }
  })

}


}
