import { Component } from '@angular/core';
import { CatgrsService } from './../../core/services/catag/catgrs.service';
import {  inject,  OnInit } from '@angular/core';

import { Icateg } from '../../shared/interface/icateg';



import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  imports: [ FormsModule ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {

private  readonly    catgrsService=inject(CatgrsService)
mycatg:Icateg[]=[]






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
 


this.callcatg()
}

}






















