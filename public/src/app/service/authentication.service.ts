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
    // token: any = localStorage['token'] || sessionStorage['token'];
    // role: string = localStorage['token'] || sessionStorage['token'];
    // userAuthentication: any = this.token === undefined ? false : true;
    // loginError: boolean = false;
    // myId: string;
    logged: boolean = false;

    constructor(private router: Router) { }

    authentication(): void {        
        firebase.initializeApp(config);

        
        let base_provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth()
            .signInWithPopup(base_provider)
            .then(result => {
                this.logged = true;
                this.router.navigateByUrl('/main/chat');
                console.log(result)
                console.log("Succes. Linked")
            })
            .catch(err => {
                console.log(err)
                console.log("failed to do")
            });
    }

    // getMyId(): any {
    //     return this.myId;
    // }

    isLogged(): any {
        return this.logged;
    }

    // logout(): void {
    //     sessionStorage.clear();
    //     localStorage.clear();
    //     this.userAuthentication = false;
    //     this.router.navigate(['/login']);
    // }
}