import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { IndexComponent } from './components/index/index.component';
import { GaleryComponent } from './components/galery/galery.component';
import { PackagesComponent } from './components/packages/packages.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { GoToTopComponent } from './components/go-to-top/go-to-top.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { MenuComponent } from './components/shared/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactComponent,
    IndexComponent,
    GaleryComponent,
    PackagesComponent,
    CarouselComponent,
    GoToTopComponent,
    PreloaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    //app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
