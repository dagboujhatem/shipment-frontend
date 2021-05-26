import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter',
})
export class InboundsDataFilterPipe implements PipeTransform {
  transform(array: any[], query: string): any {
    if (query) {
      return _.filter(array, (row) => row.shipment_id.indexOf(query) > -1);
    }
    return array;
  }
}
