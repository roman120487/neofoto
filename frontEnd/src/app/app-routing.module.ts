import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './pages/main/main.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { GalaryComponent } from './pages/galary/galary.component';
import { PoslugiComponent } from './pages/poslugi/poslugi.component';
import { AdminPortraitComponent } from './admin/admin-portrait/admin-portrait.component';
import { AdminResponseComponent } from './admin/admin-response/admin-response.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'paslugi', component: PoslugiComponent /*, children: [
    {path: 'portret', component: PortretComponent},
    {path: 'comerce', component: ComerceComponent},
  ]*/},
  {path: 'galary', component: GalaryComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'admin', component: AdminComponent, children:[
    { path: '', redirectTo: 'portrait', pathMatch: 'full' },
    { path: 'portrait', component: AdminPortraitComponent },
    { path: 'response', component: AdminResponseComponent },
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
