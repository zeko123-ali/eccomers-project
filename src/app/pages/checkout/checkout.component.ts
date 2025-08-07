
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../../core/services/payment/payment.service';


@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {

 private readonly activatedRoute=inject(ActivatedRoute)
 private readonly paymentService=inject(PaymentService)
 cartid:string=''

 public checkoutform:FormGroup=new FormGroup({

    details:new FormControl(null,[Validators.required]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city:new FormControl(null,[Validators.required]),

  })
ngOnInit(): void {

  this.activatedRoute.paramMap.subscribe({
    next:(res)=>{

      this.cartid=res.get('id')!
      console.log(this.cartid);
      
      

    }
  })


 
  
}

subimtform():void{


  console.log(this.checkoutform.value);

  this.paymentService.checkoutsesion(this.cartid,this.checkoutform.value).subscribe({
    next:(res)=>{
      console.log(res);
       if (res.status==='success') {
        window.open(res.session.url,'_self'
)
      }
    },
    error:(err)=>{
      console.log(err);
     
    }
  })
  
}
  


  



}
