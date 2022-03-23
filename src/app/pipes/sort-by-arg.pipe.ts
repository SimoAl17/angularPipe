import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'sortByArg'
})
export class SortByArgPipe implements PipeTransform {

  transform(value: User[], args: string): User[] {
    let tempArray = value;
    if (args === "name" || args === "Name") {
      tempArray.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    } else if (args === "ranking" || args === "Ranking") {
      tempArray.sort((a, b) => a.ranking - b.ranking);
    }
    return tempArray;
  }

}
