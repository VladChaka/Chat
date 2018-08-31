import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { RouterModule} from '@angular/router';
// import { AppRoutingModule } from './routing/app-routing.module';
import { MainPageComponent } from './component/main-page/main-page.component';
import { MessageComponent } from './component/message/message.component';

@NgModule({
  declarations: [
    MainPageComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [ ],
  bootstrap: [MainPageComponent]
})
export class AppModule { }
