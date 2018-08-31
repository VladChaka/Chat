import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as socketIo from 'socket.io-client';


@Injectable({
    providedIn: 'root'
})

export class SocketService {

    
    socket: SocketIOClient.Socket;
    constructor() { }

    // socket;

    public initSocket(): void {
        this.socket = socketIo('http://localhost:4000');
    }

    public send(message: any): void {
        this.socket.emit('message', message);
    }

    public onMessage(): Observable<any> {
        return new Observable<any>(observer => {
            this.socket.on('message', (data: any) => observer.next(data));
        });
    }

    // public onEvent(event: Event): Observable<any> {
    //     return new Observable<Event>(observer => {
    //         this.socket.on(event, () => observer.next());
    //     });
    // }
}
