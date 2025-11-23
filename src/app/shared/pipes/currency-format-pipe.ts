import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: unknown, currency: string = 'VND'): string {
    if (value === null || value === undefined) return '';

    let num = Number(
      String(value)
        .replace(/[^\d.-]/g, '')
    );

    if (isNaN(num)) return '';

    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0
    }).format(num);
  }

}
