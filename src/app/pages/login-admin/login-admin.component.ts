import { Component } from '@angular/core';
import { AuthUsuarioService } from '../../services/auth-usuario.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent {

  constructor( private authService: AuthUsuarioService) {

  }

  logIn(correoUsuario: string, contrasenaUsuario: string) {
    this.authService.logInWithEmailAndPassword(correoUsuario, contrasenaUsuario);
  };

  logInWithGoogle() {
    this.authService.logInWithPopup();
  }
};
