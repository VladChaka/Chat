import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './component/main-page/main-page.component';
import { MessageComponent } from './component/message/message.component';
import { AuthenticationComponent } from './component/authentication/authentication.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { ChatComponent } from './component/chat/chat.component';

@NgModule({
  declarations: [
    MainPageComponent,
    MessageComponent,
    AuthenticationComponent,
    ChatComponent
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
