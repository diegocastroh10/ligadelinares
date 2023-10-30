import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { AuthUsuarioService } from '../services/auth-usuario.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard {

  constructor(
    public authService: AuthUsuarioService, 
    public router: Router,) {
    };

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
    if (this.authService.isAdmindIn !== true) {
      this.router.navigate(['signin-usuario']);
    } 
    return true;
  };

};


