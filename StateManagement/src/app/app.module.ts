import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterActionComponent } from './components/routable-parent/left-side/counter-action/counter-action.component';
import { LeftSideComponent } from './components/routable-parent/left-side/left-side.component';
import { CounterResultComponent } from './components/routable-parent/right-side/counter-result/counter-result.component';
import { RightSideComponent } from './components/routable-parent/right-side/right-side.component';
import { RoutableParentComponent } from './components/routable-parent/routable-parent.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    RoutableParentComponent,
    LeftSideComponent,
    RightSideComponent,
    CounterActionComponent,
    CounterResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
