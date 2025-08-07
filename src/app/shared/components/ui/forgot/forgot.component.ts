import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ForgotService } from '../../../../core/services/forgot/forgot.service';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  imports: [ReactiveFormsModule],
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.scss'
})
export class ForgotComponent {

  private readonly  forgotService=inject(ForgotService)
  private readonly  authService=inject(AuthService)
  private readonly  router=inject(Router)

  step:number=1



  forgotpassform:FormGroup=new FormGroup({
    
    email:new FormControl(null,[Validators.required])
  })
  verifycodeform:FormGroup=new FormGroup({
  resetCode:new FormControl(null,[Validators.required])
  })
  restpassform:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required]),

   newPassword:new FormControl(null,[Validators.required])
  })

forpass(){
let emailvalue=this.forgotpassform.get('email')?.value
this.restpassform.get('email')?.patchValue(emailvalue)

  this.forgotService.forgotpass(this.forgotpassform.value).subscribe({
    next:(res)=>{
      console.log(res);
      if (res.statusMsg=='success') {
        this.step=2
        
      }
      

    },
    error:(err)=>{
      console.log(err);
      

    }
  })
}
verifycode(){
  console.log(this.verifycodeform.value);
  
  this.forgotService.verifyrestcode(this.verifycodeform.value).subscribe({
    next:(res)=>{
      console.log(res);
      if (res.status=='Success') {
        this.step=3
        
      }
      

    },
    error:(err)=>{
      console.log(err);
      

    }
  })
}
restpass(){
  this.forgotService.resetpass(this.restpassform.value).subscribe({
    next:(res)=>{
      console.log(res);
     localStorage.setItem("mytoken",res.token)

this.authService.getuserdata()

setTimeout(() => {
  this.router.navigate(['./Home'])
}, 1000);


    },
    error:(err)=>{
      console.log(err);
      

    }
  })
}

}
