import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './side-menu/navigation/navigation.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import {RouterModule, Routes} from "@angular/router";
import {CustomMaterialModule} from "./core/material.module";
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './side-menu/toolbar/toolbar.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', data: { title: 'First Component' }, pathMatch: 'full' },
  {
    path: 'login', component: LoginLayoutComponent, data: {title: 'First Component'},
    children: [
      {path: '', component: LoginComponent}
    ]
  },
  { path: 'main', component: HomeLayoutComponent,
    children: [
      { path: '', redirectTo: 'first', pathMatch: 'full' },
      { path: 'first', component: FirstComponent },
      { path: 'second', component: SecondComponent }
    ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SecondComponent,
    FirstComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    LoginComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: false } // <-- debugging purposes only
    ),
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }