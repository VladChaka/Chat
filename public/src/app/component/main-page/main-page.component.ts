import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../service/socket.service';

@Component({
    selector: 'main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent implements OnInit {
    ioConnection: any;
    myMessage: string;
    messages: any = [];
    socket: SocketIOClient.Socket = this.socketService.initSocket();

    constructor(
        private socketService: SocketService,
    ) { }

    ngOnInit(): void {
        this.getMessages();
    }
    
    getMessages(): void {
        this.socketService.onMessage(this.socket)
            .subscribe((message: any) => {
                this.messages.push(message.content);
            });
    }

    sendMessage(): void {
        if (!this.myMessage) { return; }

        let currentdate = new Date();
        let time = currentdate.getHours() + ":"  + currentdate.getMinutes() + ":" + currentdate.getSeconds();

        let message = {
            text: this.myMessage,
            author: "Vlad",
            time: time
        };
        
        this.socketService.send(this.socket, { content: message });
        this.myMessage = "";
    }
}