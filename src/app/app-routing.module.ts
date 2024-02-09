import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortflioComponent } from './portflio/portflio.component';
import { ContactComponent } from './contact/contact.component';
import { NoyFounedComponent } from './noy-founed/noy-founed.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent,title:'Home'},
  {path: 'about', component:AboutComponent,title: 'About'},
  {path: 'portfolio',component:PortflioComponent,title: 'Portfolio'},
  {path:'contact',component:ContactComponent,title: 'Contact'},
  {path:'**', component:NoyFounedComponent, title: 'NotFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
