import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  standalone:true
})
export class CustomPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value!=='string'||!value)return value;
     return value.split('').reverse().join('');
  }

}
