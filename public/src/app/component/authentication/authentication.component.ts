import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'authentication',
  templateUrl: './authentication.component.html'
})
export class AuthenticationComponent implements OnInit {

    constructor(private authenticationService: AuthenticationService) { }

    ngOnInit() {
        console.log(this.authenticationService.isLogged() === false);
    }

    googleSignIn(): void {
        this.authenticationService.authentication();
    };
}
