import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'monthfilter',
    pure: false
})
export class MonthFilterPipe implements PipeTransform {
    transform(messages: any[], filter: Object): any {
        if (!messages || !filter) {
            return messages;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        // return messages.filter(messages => messages.author.indexOf(filter.author) !== -1);
    }
}