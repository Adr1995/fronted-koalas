import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { HobbyFormComponent } from './components/hobby-form/hobby-form.component';
import { LandingComponent } from './components/landing/landing.component';

import { LoginComponent } from './components/login-component/login.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostComponent } from './components/post/post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'postform', component: PostFormComponent },
  { path: 'posts', component: PostComponent },
  { path: 'hobbies', component: HobbyFormComponent },
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
