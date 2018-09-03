import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from '../component/main-page/main-page.component';
import { ChatComponent } from '../component/chat/chat.component';
import { ChatNowComponent } from '../component/chat-now/chat-now.component';
import { ChatHistoryComponent } from '../component/chat-history/chat-history.component';
import { AuthenticationComponent } from '../component/authentication/authentication.component';

import { AuthenticationGuard } from "../service/authentication-guard.service";
const chatRoutes: Routes = [
    {
        path: 'now',
        component: ChatNowComponent
    },
    {
        path: 'history',
        component: ChatHistoryComponent
    },
    {
        path: '',
        redirectTo: '/now',
        pathMatch: 'full'
    },
]

const mainRoutes: Routes = [
    {
        path: 'chat',
        component: ChatComponent,
        children: chatRoutes,
        // canActivate: [AuthenticationGuard]
    },
    {
        path: 'login',
        component: AuthenticationComponent
    }
];

const routes: Routes = [
    {
        path: 'main',
        component: MainPageComponent,
        children: mainRoutes
    },
    {
        path: '',
        redirectTo: '/main/chat',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
