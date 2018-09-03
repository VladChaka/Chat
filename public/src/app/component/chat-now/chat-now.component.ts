import { Component, OnInit } from '@angular/core';
import {SocketService} from "../../service/socket.service";

@Component({
  selector: 'chat-now',
  templateUrl: './chat-now.component.html',
    styleUrls: ['./chat-now.component.less']
})
export class ChatNowComponent implements OnInit {

    ioConnection: any;
    myMessage: string;
    messages: any = [];
    socket: SocketIOClient.Socket = this.socketService.initSocket();

  constructor(
      private socketService: SocketService
  ) { }


    ngOnInit() {
        this.getMessages();
    }

    getMessages(): void {
        this.socketService.onMessage(this.socket)
            .subscribe(message => {
                this.messages.push(message);
            });
    }

    changeUsername(username): void {
        this.socket.emit('change_username', username);
    }

    sendMessage(): void {
        if (!this.myMessage) { return; }

        let currentdate = new Date();
        let time = currentdate.getHours() + ":"  + currentdate.getMinutes() + ":" + currentdate.getSeconds();

        let message = {
            text: this.myMessage,
            time: time
        };

        this.socketService.send(this.socket, { content: message });
        this.myMessage = "";
    }


}
