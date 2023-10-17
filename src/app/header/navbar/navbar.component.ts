import { Component, inject } from '@angular/core';
import { AuthUsuarioService } from '../../services/auth-usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public authService = inject(AuthUsuarioService);

  signOut() {
    this.authService.logOut();
  };
}
