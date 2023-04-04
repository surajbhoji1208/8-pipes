import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {
  

  transform(value: any, ...args: any[]): any {
    let currentDate=new Date().getFullYear()
    let userDate=new Date(value).getFullYear()
    let age=currentDate-userDate
  

    return  age;

  }
}
