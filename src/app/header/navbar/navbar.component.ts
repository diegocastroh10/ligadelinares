import { Component } from '@angular/core';
import { AuthUsuarioService } from '../../services/auth-usuario.service';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  canActivate: boolean | undefined;


    constructor(
      public authService: AuthUsuarioService,
      public authGuard: AuthGuard,
      public router: Router,
    ) {

    }

    viewProfile() {
      this.router.navigate(['perfil-usuario']);
    };


  /*

  constructor( private authService: AuthUsuarioService) {
    this.authService.user$.subscribe( user => {
      this.isLoggedIn = !!user;
    });
  };

  signOut() {
    this.authService.logOut();
  }; */
}
