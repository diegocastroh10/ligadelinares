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

//FIREBASE
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FootpageComponent,
    InicioAdminComponent,
    EquiposComponent,
    NoticiasComponent,
    UsuariosComponent,
    LoginAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()), //permite realizar peticiones put, get, delete, entre otras para app rest
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
