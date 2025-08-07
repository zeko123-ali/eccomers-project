import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { BrandService } from '../../core/services/brand/brand.service';
import { Ibrand } from '../../shared/interface/ibrand';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details2',
  imports: [CommonModule,RouterModule],
  templateUrl: './details2.component.html',
  styleUrl: './details2.component.scss'
})
export class Details2Component implements OnInit  {
  private readonly activatedRoute=inject(ActivatedRoute)
private readonly brandService=inject(BrandService)

brandid:any
branddata:Ibrand={} as Ibrand;

ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe({
      next:(res)=>{
        this.brandid=res.get('id')

      }
    })

    this.brandService.getspicprand(this.brandid).subscribe({
      next:(res)=>{

        this.branddata=res.data



      },
      error:(err)=>{

       console.log(err);
       



      }
    })
    
  }
}





