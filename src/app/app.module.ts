import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from './guards/auth.guard';

/** 
 *  Modulos
 */
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';


/** 
 *  Modulos material
 */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule  } from '@angular/material/card';

/** 
 *  Componentes
 */
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login-component/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { PostComponent } from './components/post/post.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { ProfileCategoriesComponent } from './components/profile-categories/profile-categories.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { HobbyFormComponent } from './components/hobby-form/hobby-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    LoginComponent,
    SignupComponent,
    ModalComponent,
    ProfileComponent,
    TasksComponent,
    PostComponent,
    PostFormComponent,
    ProfileCategoriesComponent,
    HobbiesComponent,
    HobbyFormComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatSliderModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgxPaginationModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
