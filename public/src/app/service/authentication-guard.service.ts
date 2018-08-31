import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard {

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    canActivate(route, state) {            
        if (!this.authenticationService.isLogged()) {
            this.router.navigateByUrl('/main/login');
        }

        return true;
    }
}
