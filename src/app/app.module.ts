import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

//ROUTES
import { AppRoutingModule } from './app-routing.module';

//COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { FootpageComponent } from './footer/footpage/footpage.component';
import { InicioAdminComponent } from './pages/inicio-admin/inicio-admin.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FootpageComponent,
    InicioAdminComponent,
    EquiposComponent,
    NoticiasComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //permite realizar peticiones put, get, delete, entre otras para app rest
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
