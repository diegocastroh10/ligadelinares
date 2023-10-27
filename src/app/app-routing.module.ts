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
  { path: 'perfil-usuario', component: PerfilUsuarioComponent, canActivate: [AuthGuard]},
  //path que redirecciona a la dirección indicada si el link está mal escrito
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
