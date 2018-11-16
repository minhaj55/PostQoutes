import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostQouteComponent } from './post-qoute/post-qoute.component';
import { MyFontDirective } from './my-font.directive';

@NgModule({
  declarations: [
    AppComponent,
    PostQouteComponent,
    MyFontDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
