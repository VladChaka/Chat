import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.less']
})
export class ChatComponent implements OnInit {

    constructor(private router: Router
    ) { }

    ngOnInit() {
    }
    logout(){
        document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:4200/main/login";
        // this.router.navigateByUrl('/main/login');
    }

}
