import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortflioComponent } from './portflio/portflio.component';
import { ContactComponent } from './contact/contact.component';
import { BreakComponent } from './break/break.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NoyFounedComponent } from './noy-founed/noy-founed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortflioComponent,
    ContactComponent,
    BreakComponent,
    NavbarComponent,
    FooterComponent,
    NoyFounedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
