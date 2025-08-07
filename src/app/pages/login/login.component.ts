import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators    } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';



import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    private readonly  authService=inject(AuthService)
    private readonly router =inject(Router)


isloading:boolean=false

errormes:string=''
succmes:string=''


 loginform:FormGroup= new FormGroup({
   
    email:new FormControl (null,[Validators.required,Validators.email]),
    password:new FormControl (null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,}$/)]),
   

        } )



  FormSubmit(){

    
if (this.loginform.valid) {
    this.isloading=true
    this.authService.signin(this.loginform.value).subscribe({
  
    next:(res)=>{
this.isloading=false
this.errormes=''

console.log(res);
this.succmes=res.message

localStorage.setItem("mytoken",res.token)

this.authService.getuserdata()

setTimeout(() => {
  this.router.navigate(['./Home'])
}, 2000);

    },
    error:(err)=>{
this.isloading=false
console.log(err.error.message);






this.errormes=err.error.message
    }

  });
}else{
  this.loginform.markAllAsTouched()
}
  
}

}
