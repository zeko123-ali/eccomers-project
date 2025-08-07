import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serc'
})
export class SercPipe implements PipeTransform {

  transform(data:any[],text:string): any {
    return data.filter((item)=>item.title.toLowerCase().includes(text.toLowerCase()));
  }

}
