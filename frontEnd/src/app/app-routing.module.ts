import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './pages/main/main.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { GalaryComponent } from './pages/galary/galary.component';
import { PoslugiComponent } from './pages/poslugi/poslugi.component';
import { AdminPortraitComponent } from './admin/admin-portrait/admin-portrait.component';
import { AdminResponseComponent } from './admin/admin-response/admin-response.component';
import { AdminListProjectComponent } from './admin/admin-list-project/admin-list-project.component';
import { ViewPhotoComponent } from './pages/galary/view-photo/view-photo.component';
import { AuthComponent } from './auth/auth.component';

import { IsLoggedIn } from './auth/isLogged.guard'

const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'paslugi', component: PoslugiComponent /*, children: [
    {path: 'portret', component: PortretComponent},
    {path: 'comerce', component: ComerceComponent},
  ]*/},
  {path: 'galary', component: GalaryComponent},
  {path: 'viewPhoto', component: ViewPhotoComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'admin', component: AdminComponent, canActivate:[IsLoggedIn] , children:[
    { path: '', redirectTo: 'portrait', pathMatch: 'full' },
    { path: 'portrait', component: AdminPortraitComponent, canActivate:[IsLoggedIn] },
    { path: 'list-project', component: AdminListProjectComponent, canActivate:[IsLoggedIn] },
    { path: 'response', component: AdminResponseComponent, canActivate:[IsLoggedIn] },
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
