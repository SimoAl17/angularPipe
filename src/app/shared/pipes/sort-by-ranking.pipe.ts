import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../model/user';

@Pipe({
  name: 'sortByRanking'
})
export class SortByRankingPipe implements PipeTransform {

  transform(value: User[]): User[] {
    let tempArray = value;
    tempArray.sort((a, b) => a.ranking - b.ranking);
    return tempArray;
  }

}
