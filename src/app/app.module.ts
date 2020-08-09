import {BrowserModule} from '@angular/platform-browser';
import {NgModule}      from '@angular/core';

import {AppRoutingModule}       from './app-routing.module';
import {AppComponent}           from './app.component';
import {LifecycleDemoComponent} from './lifecycle-demo/lifecycle-demo.component';

@NgModule({
            declarations: [
              AppComponent,
              LifecycleDemoComponent
            ],
            imports     : [
              BrowserModule,
              AppRoutingModule
            ],
            providers   : [],
            bootstrap   : [AppComponent]
          })
export class AppModule {
}
