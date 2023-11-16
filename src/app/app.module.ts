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
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { SignupUsuarioComponent } from './pages/signup-usuario/signup-usuario.component';

//FORMS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//FIREBASE
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

//FONTAWESOME 6
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SigninUsuarioComponent } from './pages/signin-usuario/signin-usuario.component';
import { VerifyUsuarioComponent } from './pages/verify-usuario/verify-usuario.component';
import { RestaurarContrasenaComponent } from './pages/restaurar-contrasena/restaurar-contrasena.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminEquiposComponent } from './pages/admin-equipos/admin-equipos.component';
import { AdminNoticiasComponent } from './pages/admin-noticias/admin-noticias.component';
import { AdminEquiposCrearComponent } from './pages/admin-equipos-crear/admin-equipos-crear.component';
import { AdminEquiposEditarComponent } from './pages/admin-equipos-editar/admin-equipos-editar.component';
import { AdminNoticiasEditarComponent } from './pages/admin-noticias-editar/admin-noticias-editar.component';
import { AdminNoticiasCrearComponent } from './pages/admin-noticias-crear/admin-noticias-crear.component';
import { AdminEquipoEditarComponent } from './pages/admin-equipo-editar/admin-equipo-editar.component';
import { AdminTablaposicionesComponent } from './pages/admin-tablaposiciones/admin-tablaposiciones.component';
import { AdminNoticiaEditarComponent } from './pages/admin-noticia-editar/admin-noticia-editar.component';
import { AdminTablaposicionesEquipoComponent } from './pages/admin-tablaposiciones-equipo/admin-tablaposiciones-equipo.component';
import { UsuarioEquipoComponent } from './pages/usuario-equipo/usuario-equipo.component';
import { AdminTablaposicionesEquipoeditarComponent } from './pages/admin-tablaposiciones-equipoeditar/admin-tablaposiciones-equipoeditar.component';
import { AdminPartidosComponent } from './pages/admin-partidos/admin-partidos.component';
import { AdminPartidosCrearComponent } from './pages/admin-partidos-crear/admin-partidos-crear.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FootpageComponent,
    InicioAdminComponent,
    EquiposComponent,
    NoticiasComponent,
    UsuariosComponent,
    LoginAdminComponent,
    SignupUsuarioComponent,
    SigninUsuarioComponent,
    VerifyUsuarioComponent,
    RestaurarContrasenaComponent,
    PerfilUsuarioComponent,
    AdminComponent,
    AdminEquiposComponent,
    AdminNoticiasComponent,
    AdminEquiposCrearComponent,
    AdminEquiposEditarComponent,
    AdminNoticiasEditarComponent,
    AdminNoticiasCrearComponent,
    AdminEquipoEditarComponent,
    AdminTablaposicionesComponent,
    AdminNoticiaEditarComponent,
    AdminTablaposicionesEquipoComponent,
    UsuarioEquipoComponent,
    AdminTablaposicionesEquipoeditarComponent,
    AdminPartidosComponent,
    AdminPartidosCrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()), //permite realizar peticiones put, get, delete, entre otras para app rest
    //AngularFireModule.initializeApp(environment.firebase), FontAwesomeModule
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
