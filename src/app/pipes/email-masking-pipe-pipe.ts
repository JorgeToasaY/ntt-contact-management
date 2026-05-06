import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailMaskingPipe',
})
export class EmailMaskingPipePipe implements PipeTransform {
  transform(value: string): string {
    const [user, domain] : string[] = value.split('@');
    const firstChar : string = user[0];
    const lastChar : string = user[user.length - 1];
    const masked : string = '*'.repeat(8);
    return `${firstChar}${masked}${lastChar}@${domain}`;
  }
}
