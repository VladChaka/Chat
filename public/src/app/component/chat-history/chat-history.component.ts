import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'chat-history',
    templateUrl: './chat-history.component.html',
    styleUrls: ['./chat-history.component.less']
})
export class ChatHistoryComponent implements OnInit {
    messages: any = [
        {
            author: "Anon",
            content: {
                text: "Meabgfbdf",
                time: "21:54:54"
            }
        },

        {
            author: "Anon",
            content: {
                text: "Meabgfbdf",
                time: "21:54:54"
            }
        },
        {
            author: "Anon",
            content: {
                text: "Meabgfbdf",
                time: "21:54:54"
            }
        },
        {
            author: "Anon",
            content: {
                text: "Meabgfbdf",
                time: "21:54:54"
            }
        }
    ]

    constructor() {
    }

    ngOnInit() {
    }

}
