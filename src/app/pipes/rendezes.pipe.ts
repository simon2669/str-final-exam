import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'rendezes'
})
export class RendezesPipe implements PipeTransform {

  transform(value: User[] | null, key: string): User[] | null {

    if (!Array.isArray(value) || !key) {
      return value;
    };

    return value.sort((a, b) => {

      if (typeof a[key] === 'number' && typeof b[key] === 'number') {
        return (a[key] - b[key]);
      } else {
        return (
          (a[key] + '').toLocaleLowerCase()
            .localeCompare((b[key] + '').toLocaleLowerCase())
        )
      }
    })
  }

}
