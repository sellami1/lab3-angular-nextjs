import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { AppareilList } from './components/appareil-list/appareil-list';
import { AppareilItem } from './components/appareil-item/appareil-item';
import { AppareilDetail } from './components/appareil-detail/appareil-detail';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Contact } from './pages/contact/contact';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    Header,
    AppareilList,
    AppareilItem,
    AppareilDetail,
    Home,
    Login,
    Contact
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
