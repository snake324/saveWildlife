import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultList = [];
    for (const list of value) {
      if (list.title.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultList.push(list);
      };
    };
    return resultList;
  }
  }


