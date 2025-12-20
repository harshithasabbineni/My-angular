import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  standalone:true
})
export class CustomPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (!value) return value;
    return value.charAt(0).toLocaleUpperCase()+ value.slice(1).toLocaleLowerCase();
  }

}
