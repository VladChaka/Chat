import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './component/main-page/main-page.component';
import { MessageComponent } from './component/message/message.component';
import { AuthenticationComponent } from './component/authentication/authentication.component';

@NgModule({
  declarations: [
    MainPageComponent,
    MessageComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [ ],
  bootstrap: [AuthenticationComponent]
})
export class AppModule { }
