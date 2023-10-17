import { Component } from '@angular/core';
import { AuthUsuarioService } from '../../services/auth-usuario.service';

@Component({
  selector: 'app-signup-usuario',
  templateUrl: './signup-usuario.component.html',
  styleUrls: ['./signup-usuario.component.scss']
})
export class SignupUsuarioComponent {
  constructor(private authService: AuthUsuarioService) {

  }
  /*
  signUp( correoUsuario: string, contrasenaUsuario: string) {
    this.authService.signUpWithEmailAndPassword(correoUsuario, contrasenaUsuario);

  }
  */
};
