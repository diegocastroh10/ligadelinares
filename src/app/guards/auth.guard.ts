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
export class AuthGuard {

  constructor(
    public authService: AuthUsuarioService, 
    public router: Router,) {
    };

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
    if (this.authService.isLoggedIn !== true) {
      this.router.navigate(['signin-usuario']);
    } 
    return true;
  };

};


/*
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { Observable, take, map, tap } from 'rxjs';
import { AuthUsuarioService } from '../services/auth-usuario.service';

@Injectable({

  providedIn: 'root'
})
export class AuthGuard {
  private authService = inject(AuthUsuarioService);
  private router = inject(Router);
  canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.user$.pipe(
          take(1),
          map(user => !!user),
          tap( loggedIn => {
              if(!loggedIn) {
                  alert('Acceso denegado');
                  this.router.navigate(['login-admin']);
              } else {
                  alert('Bienvenido a Liga de Linares');
                  this.router.navigate(['inicio-admin']);
              };
          })
      )
  };
};
*/