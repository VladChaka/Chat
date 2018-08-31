import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../service/socket.service';

@Component({
    selector: 'main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent implements OnInit {
    ioConnection: any;
    messages: any = [];
    constructor(
        private socketService: SocketService,
    ) { }

    ngOnInit(): void {
        this.initIoConnection();
    }
    
    initIoConnection(): void {
        this.socketService.initSocket();
    
        this.socketService.onMessage()
            .subscribe((message: any) => {
                this.messages.push(message.content);
            });
    }

    sendMessage(): void {
        if (!this.myMessage) { return; }

        let currentdate = new Date();
        let time = currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":" + currentdate.getSeconds();

        this.message = {
            text: this.myMessage,
            author: "Vlad",
            time: time
        }
        this.socketService.send({ content: this.message });
        this.myMessage = "";
    }
}