import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

transform(items: any[], args: any[]): any {
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item.title.indexOf(args[0].title) !== -1);
    }

}
