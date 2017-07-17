import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
	e1:string;
    transform(value: any, input: string) {
        if (input) {
            input = input.lowercase();
            return value.filter(function (el: any) {
                return el.lowercase().indexOf(input) > -1;
            })
        }
        return value;
    }
}
