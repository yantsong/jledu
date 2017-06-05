import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classify'
})
export class ClassifyPipe implements PipeTransform {

  transform(value: Array<any>, kind: string,key:string): Array<any> {
    let arr:Array<any>;
    arr = value.filter((item) =>{
      return item[kind] == key;
    })
    return arr;
  }

}
