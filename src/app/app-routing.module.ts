import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioAdminComponent } from './pages/inicio-admin/inicio-admin.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';

const routes: Routes = [
  { path: '', component: InicioAdminComponent},
  { path: 'equipos', component: EquiposComponent},
  { path: 'noticias', component: NoticiasComponent},
  //path que redirecciona a la dirección indicada si el link está mal escrito
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
