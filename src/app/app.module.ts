import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { FootpageComponent } from './footer/footpage/footpage.component';
import { InicioAdminComponent } from './pages/inicio-admin/inicio-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FootpageComponent,
    InicioAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
