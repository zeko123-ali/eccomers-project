import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators    } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { group, error } from 'console';


import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


    private readonly  authService=inject(AuthService)
    private readonly router =inject(Router)


isloading:boolean=false

errormes:string=''
succmes:string=''


  registerform:FormGroup= new FormGroup({
    name:new FormControl (null ,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl (null,[Validators.required,Validators.email]),
    password:new FormControl (null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,}$/)]),
    rePassword:new FormControl (null,[Validators.required,]),
    phone:new FormControl (null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),

        }, {validators:this.confirmpassword }  )


  confirmpassword(group:AbstractControl){
    const password= group.get('password')?.value
    const  rePassword= group.get('rePassword')?.value
    if (password===rePassword) {
      return null
      
    }else{
      return{mismatch:true}
    }
  }

  FormSubmit(){
 
    
if (this.registerform.valid) {
  this.isloading=true
    this.authService.signup(this.registerform.value).subscribe({
  
    next:(res)=>{
this.isloading=false
this.errormes=''

console.log(res);
this.succmes=res.message

setTimeout(() => {
  this.router.navigate(['./login'])
}, 2000);

    },
    error:(err)=>{
this.isloading=false
console.log(err.error.message);






this.errormes=err.error.message
    }

  });
}else{
  this.registerform.markAllAsTouched()
}
  
}
}

