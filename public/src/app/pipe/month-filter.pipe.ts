import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'monthfilter'
})
export class MonthFilterPipe implements PipeTransform {
    transform(messages: any[], filter: any): any {
        if (!messages || !filter) {
            return messages;
        }
        return messages.filter(i => i.indexOf(filter) !== -1);
    }
}