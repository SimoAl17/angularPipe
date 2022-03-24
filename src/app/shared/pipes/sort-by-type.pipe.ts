import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../model/user';

@Pipe({
  name: 'sortByType'
})
export class SortByTypePipe implements PipeTransform {

  transform(value: any[], args: any): any[] {
    let tempArray = value;
    if (typeof value[0][args] === "number") {
      tempArray.sort((a, b) => a[args] - b[args]);
    }
    return tempArray;
  }
   
}
