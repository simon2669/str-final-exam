import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'szuro'
})
export class SzuroPipe implements PipeTransform {

  transform(value: User[] | null, key: string, phrase: string): User[] | null {
    if (!Array.isArray(value) || !key || !value) {
      return value;
    }
    return value.filter((user) => {

      return (user[key] + "").toLocaleLowerCase().includes((phrase + "").toLocaleLowerCase());
    })
  }

}
