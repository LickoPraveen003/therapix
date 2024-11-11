import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PodcastComponent } from './podcast/podcast.component';
import { BookcallComponent } from './bookcall/bookcall.component';
import { ResourceComponent } from './resource/resource.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'resource', component: ResourceComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: 'bookcall', component: BookcallComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
