import { Component, OnInit } from '@angular/core';
import { FormService } from '../../service/form.service';
@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {
    messages: any = {
        msg1: {
            text: "Hello, my name is Vlad Chaka",
            author: "Vlad",
            data: "14.05",
            time: "23:55",
        },
        msg2: {
            text: "Hello, my name is Vlad Chaka",
            author: "Vlad",
            data: "14.05",
            time: "23:55",
        },
        msg3: {
            text: "Hello, my name is Vlad Chaka",
            author: "Vlad",
            data: "14.05",
            time: "23:55",
        },

        msg4: {
            text: "Hello, my name is Vlad Chaka",
            author: "Vlad",
            data: "14.05",
            time: "23:55",
        }
    };
    constructor(
        private formService: FormService
    ) {
    }
    ngOnInit() {
        // console.log(messages);
    }

}