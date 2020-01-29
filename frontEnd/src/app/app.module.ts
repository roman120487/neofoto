import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { GalaryComponent } from './pages/galary/galary.component';
import { PoslugiComponent } from './pages/poslugi/poslugi.component';
import { AdminPortraitComponent } from './admin/admin-portrait/admin-portrait.component';
import { AdminResponseComponent } from './admin/admin-response/admin-response.component';
import { AdminListProjectComponent } from './admin/admin-list-project/admin-list-project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewPhotoComponent } from './pages/galary/view-photo/view-photo.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ContactsComponent,
    GalaryComponent,
    PoslugiComponent,
    AdminPortraitComponent,
    AdminResponseComponent,
    AdminListProjectComponent,
    ViewPhotoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // Observable
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
