import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from "firebase";
import { Router } from '@angular/router';

const config = {
    apiKey: "AIzaSyDZA_y5KIhevYrymsjdrmTz6EF1rXKHeqY",
    authDomain: "chat-215011.firebaseapp.com",
    databaseURL: "https://chat-215011.firebaseio.com",
    projectId: "chat-215011",
    storageBucket: "chat-215011.appspot.com",
    messagingSenderId: "69463920025"
};

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    logged: boolean = false;

    constructor(private router: Router) { }

    authentication(): void {        
        firebase.initializeApp(config);

        
        let base_provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth()
            .signInWithPopup(base_provider)
            .then(result => {
                this.logged = true;
                this.router.navigateByUrl('/main/chat/now');
            })
            .catch(err => {
            });
    }

    isLogged(): any {
        return this.logged;
    }
}