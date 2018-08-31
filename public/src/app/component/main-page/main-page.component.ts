import { Component, OnInit } from '@angular/core';
import { FormService } from '../../service/form.service';
@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {
    messages: any = [
        {
            text: "Hello, my name is Vlad Chaka",
            author: "Vlad",
            data: "14.05",
            time: "23:55",
        },
        {
            text: "Hello, my name is Vlad Chaka",
            author: "Vlad",
            data: "14.05",
            time: "23:55",
        },
        {
            text: "Hello, my name is Vlad Chaka",
            author: "Vlad",
            data: "14.05",
            time: "23:55",
        },

        {
            text: "Hello, my name is Vlad Chaka",
            author: "Vlad",
            data: "14.05",
            time: "23:55",
        }
    ];
    constructor(
        private formService: FormService
    ) {
    }
    ngOnInit() {
        console.log(this.messages);
    }

}