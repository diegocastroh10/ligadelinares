import { Component, inject } from '@angular/core';
import { AuthUsuarioService } from '../../services/auth-usuario.service';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isLoggedIn: boolean | undefined;

  /*constructor( private authService: AuthUsuarioService) {
    this.authService.user$.subscribe( user => {
      this.isLoggedIn = !!user;
    });
  };

  signOut() {
    this.authService.logOut();
  }; */
}
