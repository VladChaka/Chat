import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './component/main-page/main-page.component';
import { MessageComponent } from './component/message/message.component';

@NgModule({
  declarations: [
    MainPageComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [ ],
  bootstrap: [MainPageComponent]
})
export class AppModule { }
