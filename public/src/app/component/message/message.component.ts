import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class MessageComponent implements OnInit {
  @Input() message: any;
  constructor() { }

  ngOnInit() {
  }

}
