import { Component } from '@angular/core';
import { AuthUsuarioService } from '../../services/auth-usuario.service';
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
