import { Component, OnInit } from '@angular/core';
import { FormService } from '../../service/form.service';
@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {
    constructor(
        private formService: FormService
    ) {
    }
    ngOnInit() {
    }

}