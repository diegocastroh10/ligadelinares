import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//COMPONENTS
import { InicioAdminComponent } from './pages/inicio-admin/inicio-admin.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
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

const routes: Routes = [
  { path: '', component: InicioAdminComponent},
  { path: 'equipos', component: EquiposComponent/*, canActivate: [AuthGuard]*/},
  { path: 'noticias', component: NoticiasComponent},
  { path: 'usuarios', component: UsuariosComponent},
  { path: 'login-admin', component: LoginAdminComponent},
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
  //path que redirecciona a la dirección indicada si el link está mal escrito
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
