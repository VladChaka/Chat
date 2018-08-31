import { Component} from '@angular/core';

import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'authentication',
  templateUrl: './authentication.component.html'
})
export class AuthenticationComponent{

    constructor(private authenticationService: AuthenticationService) { }

    googleSignIn(): void {
        this.authenticationService.authentication();
    };
}
