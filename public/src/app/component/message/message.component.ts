import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent{
    @Input() message: any;
    constructor() { }
}
