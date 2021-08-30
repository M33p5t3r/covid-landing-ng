import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SymptomsComponent } from './pages/symptoms/symptoms.component';
import { PreventionComponent } from './pages/prevention/prevention.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { StatsCountComponent } from './shared/stats-count/stats-count.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SymptomsComponent,
    PreventionComponent,
    ContactComponent,
    NavigationComponent,
    StatsCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
