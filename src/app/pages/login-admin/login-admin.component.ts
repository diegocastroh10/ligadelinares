
//COMPONENTE SIN USO

import { Component, inject } from '@angular/core';
import { AuthUsuarioService } from '../../services/auth-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent {
  
  constructor( 
    private authService: AuthUsuarioService,
    private router: Router) {

  }
  /*
  signIn(correoUsuario: string, contrasenaUsuario: string) {
    this.authService.logInWithEmailAndPassword(correoUsuario, contrasenaUsuario);
  };
  
  logInWithGoogle() {
    this.authService.logInWithPopup();
  }
  */

  correoUsuario!: string;
  contrasenaUsuario!: string;  

  signUpCmpnt() {
    this.authService.signUp(this.correoUsuario, this.contrasenaUsuario);
  };

  registrarUsuario() {
    this.router.navigate(['signup-usuario']);
  }
};
