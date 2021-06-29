import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomenavbarComponent } from './components/homenavbar/homenavbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SportsComponent } from './components/sports/sports.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddNewsComponent } from './components/addnews/addnews.component';
import { NewslistComponent } from './components/newslist/newslist.component';
import { AdminnavbarComponent } from './components/adminnavbar/adminnavbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomenavbarComponent,
    FooterComponent,
    SportsComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomePageComponent,
    AddNewsComponent,
    NewslistComponent,
    AdminnavbarComponent,
    LoginComponent,
    RegisterComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
