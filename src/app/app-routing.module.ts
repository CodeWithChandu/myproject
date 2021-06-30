import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AndhraComponent } from './andhra/andhra.component';
import { ArunachalComponent } from './arunachal/arunachal.component';
import { AssamComponent } from './assam/assam.component';
import { BengalComponent } from './bengal/bengal.component';
import { BiharComponent } from './bihar/bihar.component';
import { ChattisgarhComponent } from './chattisgarh/chattisgarh.component';
import { ContactComponent } from './contact/contact.component';
import { DelhiComponent } from './delhi/delhi.component';
import { GoaComponent } from './goa/goa.component';
import { GujaratComponent } from './gujarat/gujarat.component';
import { HaryanaComponent } from './haryana/haryana.component';
import { HimachalComponent } from './himachal/himachal.component';
import { HomeComponent } from './home/home.component';
import { JharkhandComponent } from './jharkhand/jharkhand.component';
import { JkComponent } from './jk/jk.component';
import { KarnatakaComponent } from './karnataka/karnataka.component';
import { KeralaComponent } from './kerala/kerala.component';
import { MaharashtraComponent } from './maharashtra/maharashtra.component';
import { ManipurComponent } from './manipur/manipur.component';
import { MeghalayaComponent } from './meghalaya/meghalaya.component';
import { MizoramComponent } from './mizoram/mizoram.component';
import { MpComponent } from './mp/mp.component';
import { NagalandComponent } from './nagaland/nagaland.component';
import { OdissaComponent } from './odissa/odissa.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlacesComponent } from './places/places.component';
import { PunjabComponent } from './punjab/punjab.component';
import { RajasthanComponent } from './rajasthan/rajasthan.component';
import { TelanganaComponent } from './telangana/telangana.component';
import { TnComponent } from './tn/tn.component';
import { TripuraComponent } from './tripura/tripura.component';
import { UpComponent } from './up/up.component';
import { UttarkhandComponent } from './uttarkhand/uttarkhand.component';


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'about', component:AboutComponent},
  {path: 'places', component:PlacesComponent},
  {path: 'andhra', component:AndhraComponent},
  {path: 'arunachal', component:ArunachalComponent},
  {path: 'assam', component:AssamComponent},
  {path: 'bengal', component:BengalComponent},
  {path: 'bihar', component:BiharComponent},
  {path: 'chattisgarh', component:ChattisgarhComponent},
  {path: 'delhi', component:DelhiComponent},
  {path: 'goa', component:GoaComponent},
  {path: 'gujarat', component:GujaratComponent},
  {path: 'haryana', component:HaryanaComponent},
  {path: 'himachal', component:HimachalComponent},
  {path: 'jarkhand', component:JharkhandComponent},
  {path: 'jk', component:JkComponent},
  {path: 'karnataka', component:KarnatakaComponent},
  {path: 'kerala', component:KeralaComponent},
  {path: 'maharashtra', component:MaharashtraComponent},
  {path: 'manipur', component:ManipurComponent},
  {path: 'meghalaya', component:MeghalayaComponent},
  {path: 'mizoram', component:MizoramComponent},
  {path: 'mp', component:MpComponent},
  {path: 'nagaland', component:NagalandComponent},
  {path: 'odissa', component:OdissaComponent},
  {path: 'punjab', component:PunjabComponent},
  {path: 'rajasthan', component:RajasthanComponent},
  {path: 'telangana', component:TelanganaComponent},
  {path: 'tn', component:TnComponent},
  {path: 'tripura', component:TripuraComponent},
  {path: 'up', component:UpComponent},
  {path: 'uttarkhand', component:UttarkhandComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}, // redirect to `home-component`
  {path: '**', component: PageNotFoundComponent}, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
