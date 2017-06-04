import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classify'
})
export class ClassifyPipe implements PipeTransform {

  transform(value: Array<any>, kind: string,key:string): Array<any> {
    console.log(kind,key);
    let arr:Array<any>;
    arr = value.filter((item) =>{
      console.log(item,item[kind],kind);
      return item[kind] == key;
    })
    console.log(arr);
    return arr;
  }

}
