import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as socketIo from 'socket.io-client';

const config = {
    url: 'http://localhost:',
    port: 4000
};

@Injectable({
    providedIn: 'root'
})

export class SocketService {
    constructor() { }

    initSocket(): any {
        return socketIo(config.url + config.port);
    }

    send(socket, message: any): void {
        socket.emit('message', message);
    }

    onMessage(socket): Observable<any> {
        return new Observable<any>(observer => {
            socket.on('message', (data: any) => observer.next(data));
        });
    }
}
