import { NgModule } from '@angular/core';
import { app_routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { IndexComponent } from './components/index/index.component';
import { GaleryComponent } from './components/galery/galery.component';
import { PackagesComponent } from './components/packages/packages.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { GoToTopComponent } from './components/go-to-top/go-to-top.component';
import { PreloaderComponent } from './components/preloader/preloader.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ContactComponent,
    IndexComponent,
    GaleryComponent,
    PackagesComponent,
    CarouselComponent,
    GoToTopComponent,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    //app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
