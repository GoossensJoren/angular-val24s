import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './components/home/home.component';
import {MaterialModule} from '../app/material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { ConcertComponent } from './components/concert/concert.component';
import { ContactComponent } from './components/contact/contact.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TvhComponent } from './components/tvh/tvh.component';
import { NgxImageSwiperModule } from 'ngx-image-swiper';
import {LimitStringPipe} from './pipes/limitStringPipe';
import { ImagesComponent } from './components/images/images.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    FooterComponent,
    ConcertComponent,
    ContactComponent,
    TvhComponent,
    LimitStringPipe,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule ,
    NgxImageSwiperModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDxz70THIVZwo8vmwqdT3-aI928wkx3mac'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
