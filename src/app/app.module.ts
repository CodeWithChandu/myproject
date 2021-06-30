import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DelhiComponent } from './delhi/delhi.component';
import { GangtokComponent } from './gangtok/gangtok.component';
import { MeghalayaComponent } from './meghalaya/meghalaya.component';
import { ArunachalComponent } from './arunachal/arunachal.component';
import { NagalandComponent } from './nagaland/nagaland.component';
import { ManipurComponent } from './manipur/manipur.component';
import { MizoramComponent } from './mizoram/mizoram.component';
import { TripuraComponent } from './tripura/tripura.component';
import { GoaComponent } from './goa/goa.component';
import { JkComponent } from './jk/jk.component';
import { HimachalComponent } from './himachal/himachal.component';
import { PunjabComponent } from './punjab/punjab.component';
import { TelanganaComponent } from './telangana/telangana.component';
import { HaryanaComponent } from './haryana/haryana.component';
import { UttarkhandComponent } from './uttarkhand/uttarkhand.component';
import { UpComponent } from './up/up.component';
import { RajasthanComponent } from './rajasthan/rajasthan.component';
import { MpComponent } from './mp/mp.component';
import { BiharComponent } from './bihar/bihar.component';
import { JharkhandComponent } from './jharkhand/jharkhand.component';
import { BengalComponent } from './bengal/bengal.component';
import { AssamComponent } from './assam/assam.component';
import { OdissaComponent } from './odissa/odissa.component';
import { ChattisgarhComponent } from './chattisgarh/chattisgarh.component';
import { GujaratComponent } from './gujarat/gujarat.component';
import { KarnatakaComponent } from './karnataka/karnataka.component';
import { AndhraComponent } from './andhra/andhra.component';
import { KeralaComponent } from './kerala/kerala.component';
import { TnComponent } from './tn/tn.component';
import { PlacesComponent } from './places/places.component';
import { MaharashtraComponent } from './maharashtra/maharashtra.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DelhiComponent,
    GangtokComponent,
    MeghalayaComponent,
    ArunachalComponent,
    NagalandComponent,
    ManipurComponent,
    MizoramComponent,
    TripuraComponent,
    GoaComponent,
    JkComponent,
    HimachalComponent,
    PunjabComponent,
    TelanganaComponent,
    HaryanaComponent,
    UttarkhandComponent,
    UpComponent,
    RajasthanComponent,
    MpComponent,
    BiharComponent,
    JharkhandComponent,
    BengalComponent,
    AssamComponent,
    OdissaComponent,
    ChattisgarhComponent,
    GujaratComponent,
    KarnatakaComponent,
    AndhraComponent,
    KeralaComponent,
    TnComponent,
    PlacesComponent,
    MaharashtraComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
