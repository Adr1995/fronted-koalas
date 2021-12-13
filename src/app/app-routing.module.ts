import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { HobbyFormComponent } from './components/hobby-form/hobby-form.component';
import { AllpostComponent } from './components/allpost/allpost.component';
import { LandingComponent } from './components/landing/landing.component';

import { LoginComponent } from './components/login-component/login.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostComponent } from './components/post/post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { AnadirComponent } from './components/anadir/anadir.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent,
  canActivate : [ AuthGuard] },
  { path: 'tasks', component: TasksComponent,
  canActivate : [ AuthGuard] },
  { path: 'postform', component: PostFormComponent,
  canActivate : [ AuthGuard] },
  { path: 'hobbyForm', component: HobbyFormComponent,
  canActivate : [ AuthGuard] },
  { path: 'posts', component: PostComponent,
  canActivate : [ AuthGuard] },
  { path: 'hobbies', component: HobbyFormComponent,
  canActivate : [ AuthGuard] },
  { path: 'allposts', component: AllpostComponent,
  canActivate : [ AuthGuard] },
  { path: 'añadir', component: AnadirComponent,
  canActivate : [ AuthGuard] },
  
  { 
    path: 'profile', 
    component: ProfileComponent ,
    canActivate : [ AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
