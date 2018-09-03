import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './component/main-page/main-page.component';
import { MessageComponent } from './component/message/message.component';
import { AuthenticationComponent } from './component/authentication/authentication.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { ChatComponent } from './component/chat/chat.component';
import { ChatHistoryComponent } from './component/chat-history/chat-history.component';
import { ChatNowComponent } from './component/chat-now/chat-now.component';

import {MonthFilterPipe} from "./pipe/month-filter.pipe";
import { Error404Component } from './component/error404/error404.component';

@NgModule({
  declarations: [
    MainPageComponent,
    MessageComponent,
    AuthenticationComponent,
    ChatComponent,
    ChatHistoryComponent,
    ChatNowComponent,
      MonthFilterPipe,
      Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [ ],
  bootstrap: [MainPageComponent]
})
export class AppModule { }
