import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//COMPONENTS
import { EquiposComponent } from './pages/equipos/equipos.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { SignupUsuarioComponent } from './pages/signup-usuario/signup-usuario.component';
import { SigninUsuarioComponent } from './pages/signin-usuario/signin-usuario.component';
import { VerifyUsuarioComponent } from './pages/verify-usuario/verify-usuario.component';
import { RestaurarContrasenaComponent } from './pages/restaurar-contrasena/restaurar-contrasena.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';

//GUARDS
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminEquiposComponent } from './pages/admin-equipos/admin-equipos.component';
import { AdminNoticiasComponent } from './pages/admin-noticias/admin-noticias.component';
import { AdminEquiposCrearComponent } from './pages/admin-equipos-crear/admin-equipos-crear.component';
import { AdminEquiposEditarComponent } from './pages/admin-equipos-editar/admin-equipos-editar.component';
import { AdminNoticiasCrearComponent } from './pages/admin-noticias-crear/admin-noticias-crear.component';
import { AdminNoticiasEditarComponent } from './pages/admin-noticias-editar/admin-noticias-editar.component';
import { AdminEquipoEditarComponent } from './pages/admin-equipo-editar/admin-equipo-editar.component';
import { AdminTablaposicionesComponent } from './pages/admin-tablaposiciones/admin-tablaposiciones.component';
import { AdminNoticiaEditarComponent } from './pages/admin-noticia-editar/admin-noticia-editar.component';
import { AdminTablaposicionesEquipoComponent } from './pages/admin-tablaposiciones-equipo/admin-tablaposiciones-equipo.component';
import { UsuarioEquipoComponent } from './pages/usuario-equipo/usuario-equipo.component';
import { AdminTablaposicionesEquipoeditarComponent } from './pages/admin-tablaposiciones-equipoeditar/admin-tablaposiciones-equipoeditar.component';
import { AdminPartidosComponent } from './pages/admin-partidos/admin-partidos.component';
import { AdminPartidosCrearComponent } from './pages/admin-partidos-crear/admin-partidos-crear.component';
import { AdminPartidosEditarComponent } from './pages/admin-partidos-editar/admin-partidos-editar.component';
import { PartidosComponent } from './pages/partidos/partidos.component';
import { TablaposicionesComponent } from './pages/tablaposiciones/tablaposiciones.component';
import { UsuarioNoticiasComponent } from './pages/usuario-noticias/usuario-noticias.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminAuspiciadoresComponent } from './pages/admin-auspiciadores/admin-auspiciadores.component';
import { AdminAuspiciadoresCrearComponent } from './pages/admin-auspiciadores-crear/admin-auspiciadores-crear.component';
import { AdminAuspiciadoresEditarComponent } from './pages/admin-auspiciadores-editar/admin-auspiciadores-editar.component';
import { AuspiciadoresComponent } from './pages/auspiciadores/auspiciadores.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'equipos', component: EquiposComponent/*, canActivate: [AuthGuard]*/},
  { path: 'noticias', component: NoticiasComponent},
  { path: 'usuarios', component: UsuariosComponent},
  //{ path: 'login-admin', component: LoginAdminComponent},
  { path: 'signup-usuario', component: SignupUsuarioComponent},
  { path: 'signin-usuario', component: SigninUsuarioComponent},
  { path: 'verify-usuario', component: VerifyUsuarioComponent},
  { path: 'restaurar-contrasena', component: RestaurarContrasenaComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin-noticias', component: AdminNoticiasComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin-noticias-crear', component: AdminNoticiasCrearComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin-noticias-editar', component: AdminNoticiasEditarComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin-equipos', component: AdminEquiposComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin-equipos-crear', component: AdminEquiposCrearComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin-equipos-editar', component: AdminEquiposEditarComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin-equipo-editar/:id', component: AdminEquipoEditarComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'perfil-usuario', component: PerfilUsuarioComponent, canActivate: [AuthGuard]},
  { path: 'admin-tablaposiciones', component: AdminTablaposicionesComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin-noticia-editar/:id', component: AdminNoticiaEditarComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin-tablaposiciones-equipo', component: AdminTablaposicionesEquipoComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin-tablaposiciones-equipoeditar/:id', component: AdminTablaposicionesEquipoeditarComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'usuario-equipo/:id', component: UsuarioEquipoComponent, canActivate: [AuthGuard]},
  { path: 'admin-partidos', component: AdminPartidosComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin-partidos-crear', component: AdminPartidosCrearComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin-partidos-editar/:id', component: AdminPartidosEditarComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'partidos', component: PartidosComponent, canActivate: [AuthGuard]},
  { path: 'tablaposiciones', component: TablaposicionesComponent, canActivate: [AuthGuard]},
  { path: 'usuario-noticias/:id', component: UsuarioNoticiasComponent, canActivate: [AuthGuard]},
  { path: 'admin-auspiciadores', component: AdminAuspiciadoresComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin-auspiciadores-crear', component: AdminAuspiciadoresCrearComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'admin-auspiciadores-editar/:id', component: AdminAuspiciadoresEditarComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'auspiciadores', component: AuspiciadoresComponent },
  //path que redirecciona a la dirección indicada si el link está mal escrito
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
