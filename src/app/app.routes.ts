

import { Routes } from '@angular/router';
import { BlankComponent } from './layout/blank/blank.component';
import { AuthComponent } from './layout/auth/auth.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { loggdGuard } from './core/guards/loggd/loggd.guard';



export const routes: Routes = [
    {path :'' ,redirectTo:'Home',pathMatch :'full'},



    {path:'' , component:BlankComponent , canActivate:[authGuard] ,title:'blank' ,
   
     children : [
        {path:'Home', loadComponent:()=> import ('./pages/home/home.component').then((c)=>c.HomeComponent) , title:'Home'},


        {path:'cart',loadComponent: ()=> import("./pages/cart/cart.component").then((c)=>c.CartComponent), title:'cart'},


       
        {path:'products',loadComponent:()=>import('./pages/products/products.component').then((c)=>c.ProductsComponent) , title:'products'},

 {path:'categories',loadComponent:()=>import('./pages/categories/categories.component').then((c)=>c.CategoriesComponent), title:'categories'},

        {path:'brands', loadComponent:()=>import('./pages/brands/brands.component').then((c)=>c.BrandsComponent), title:'brands'},

        {path:'allorders', loadComponent:()=>import('./pages/allorders/allorders.component').then((c)=>c.allordersComponent), title:'allorders'},
        {path:'checkout/:id', loadComponent:()=>import('./pages/checkout/checkout.component').then((c)=>c.CheckoutComponent), title:'checkout'},
        {path:'details/:id', loadComponent:()=>import('./pages/details/details.component').then((c)=>c.DetailsComponent), title:'details'},
        {path:'details2/:id', loadComponent:()=>import('./pages/details2/details2.component').then((c)=>c.Details2Component), title:'details2'}
    ]},
    {path:'' , component:AuthComponent ,canActivate:[loggdGuard]  ,title:'auth', children : [
        {path : 'login', loadComponent:()=>import("./pages/login/login.component").then((c)=>c.LoginComponent) , title : 'login'},

        {path : 'register', loadComponent:()=>import('./pages/register/register.component').then((c)=>c.RegisterComponent) , title : 'register'},


        {path : 'forgot', loadComponent:()=>import('./shared/components/ui/forgot/forgot.component').then((c)=>c.ForgotComponent) , title : 'forgot'},


          {path : '**', loadComponent:()=>import("./pages/notfound/notfound.component").then((c)=>c.NotfoundComponent) , title : 'notfound'},
    ]},
    
];
