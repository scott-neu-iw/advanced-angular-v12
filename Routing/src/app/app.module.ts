import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ParamQueryComponent } from './components/param-query/param-query.component';
import { RouteConfigurableComponent } from './components/route-configurable/route-configurable.component';
import { RouteMenuComponent } from './components/route-menu/route-menu.component';
import { RoutePermissionedComponent } from './components/route-permissioned/route-permissioned.component';
import { RouteStaticComponent } from './components/route-static/route-static.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    RouteConfigurableComponent,
    RouteStaticComponent,
    RoutePermissionedComponent,
    RouteMenuComponent,
    HomeComponent,
    NotFoundComponent,
    ParamQueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
