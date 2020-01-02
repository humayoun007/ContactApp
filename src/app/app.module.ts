import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { AppMaterialModule } from './app.material.module';

import { ContactService } from './services';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { AppComponent } from './app.component';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { ContactformComponent } from './contactform';
import { ContactlistComponent } from './contactlist';



@NgModule({
  declarations: [
    AppComponent,
    ContactformComponent,
    ContactlistComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    HttpClientModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    Routing
  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend , if you want to use db then comment this
    fakeBackendProvider,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
