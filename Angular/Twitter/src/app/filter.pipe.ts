import { Pipe, PipeTransform } from '@angular/core';
import { New } from './new';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(news: Array<New>, filter?: any): any {
    if(news!=null && news.length){
      return news.filter((n: New) => n.title.indexOf(filter) !== -1);
    }
  }

}