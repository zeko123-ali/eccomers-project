
import { Component, inject,  OnInit } from '@angular/core';
import { ProudctService } from '../../core/services/product/proudct.service';
import { Iproduct } from '../../shared/interface/iproduct';

import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { SercPipe } from '../../shared/pipes/serc.pipe';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  imports: [CarouselModule,RouterLink,SercPipe,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  private readonly  proudctService= inject(ProudctService)

  private  readonly   cartService=inject(CartService)
  private  readonly   toastrService=inject(ToastrService)


  myprodut:Iproduct[]=[]

searchitem:string=""



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














ngOnInit(): void {
 
this.callproduct()


}

addproducttocart(id:string):void{

 
  this.cartService.addproudcttocart(id).subscribe({
    next:(res)=>{
      console.log(res);
        this.toastrService.success(res.message, "res.titel");
        

    },
    error:(err)=>{
      console.log(err);
      

    }
  })

}

}















 
  
  





 
  




