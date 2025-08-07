
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProudctService } from '../../core/services/product/proudct.service';
import { Iproduct } from '../../shared/interface/iproduct';
import { CartService } from '../../core/services/cart/cart.service';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
private readonly activatedRoute=inject(ActivatedRoute)
private readonly proudctService=inject(ProudctService)



prodid:any
proddata:Iproduct={} as Iproduct;



  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe({
      next:(res)=>{
        this.prodid=res.get('id')

      }
    })

    this.proudctService.getspicprod(this.prodid).subscribe({
      next:(res)=>{

        this.proddata=res.data



      },
      error:(err)=>{

       console.log(err);
       



      }
    })



    
  }

}



