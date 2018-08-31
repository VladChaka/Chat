import { Component, OnInit } from '@angular/core';
import { FormService } from '../../service/form.service';

import { SocketService } from '../../service/socket.service';

@Component({
    selector: 'main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent implements OnInit {
    ioConnection: any;
    messages: any = [
        {
            text: "Hello, my name is Vlad Chaka",
            author: "Vlad",
            data: "14.05",
            time: "23:55",
        },
        {
            text: "Hello, my name is Vlad Chaka",
            author: "Vlad",
            data: "14.05",
            time: "23:55",
        },
        {
            text: "Hello, my name is Vlad Chaka",
            author: "Vlad",
            data: "14.05",
            time: "23:55",
        },

        {
            text: "Hello, my name is Vlad Chaka",
            author: "Vlad",
            data: "14.05",
            time: "23:55",
        }
    ];
    constructor(
        private formService: FormService,
        private socketService: SocketService,
    ) { }

    ngOnInit(): void {
        this.initIoConnection();
    }
    
    initIoConnection(): void {
        this.socketService.initSocket();
    
        this.socketService.onMessage()
            .subscribe((message: any) => {
                console.log(message);
                this.messages.push(message);

                console.log(this.messages);
            });
    }

    sendMessage(message: string): void {
        if (!message) { return; }

        // let currentdate = new Date();
        // let date = currentdate.getDay() + "/"+currentdate.getMonth()
        //     + "/" + currentdate.getFullYear();
        // let time = currentdate.getHours() + ":"
        //     + currentdate.getMinutes() + ":" + currentdate.getSeconds();
        //
        // this.message = {
        //     text: this.myMessage,
        //     author: "Vlad",
        //     data: date,
        //     time: time,
        // }
        // this.messages.push(message);
        //
        // console.log(message);
        this.socketService.send({ content: message });
    }
}