import { Component, inject,  OnInit } from '@angular/core';

import { RouterLink, RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';


import { FormsModule } from '@angular/forms';


import { BrandService } from '../../core/services/brand/brand.service';
import { Ibrand } from '../../shared/interface/ibrand';

@Component({
  selector: 'app-brands',
  imports: [CarouselModule,FormsModule,RouterModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit {

   private readonly  BrandService= inject(BrandService)

 
 


  mybrand:Ibrand[]=[]

  callbrand(){
   this.BrandService.getprand().subscribe({
    next:(res)=>{
      console.log(res.data);
      this.mybrand=res.data
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}

ngOnInit(): void {
 
this.callbrand()


}


}



























