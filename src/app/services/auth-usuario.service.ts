import { Injectable, NgZone } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthUsuarioService {

  usuario: any;

  constructor(
    private firebaseAuthenticationService: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone
  ) { 
    this.firebaseAuthenticationService.authState
    .subscribe( (user) => {
      if (user) {
        this.usuario = user;
        localStorage.setItem('user', JSON.stringify(this.usuario));
      } else {
        localStorage.setItem('user', 'null');
      };
    }); 
  };

  estadoUsuario() {
    this.firebaseAuthenticationService.authState
    .subscribe( (userState) => {
      userState && this.ngZone.run( () => this.router.navigate(['inicio-admin']));
    });
  };

  logInWithEmailAndPassword (cuentaUsuario: string, contrasenaUsuario: string) {
    return this.firebaseAuthenticationService.signInWithEmailAndPassword(cuentaUsuario, contrasenaUsuario)
    .then( (userCredential) => {
      this.usuario = userCredential.user
      this.estadoUsuario()
    })
    .catch( (error: Error) => { 
      alert(error.message);
    });
  };

  logInWithPopup() {
    return this.firebaseAuthenticationService.signInWithPopup(new GoogleAuthProvider())
      .then( () => this.estadoUsuario() )
      .catch( (error: Error) => {
        alert(error.message);
      });
  };

  get isLoggedIn(): boolean {
    const usuario = JSON.parse(localStorage.getItem('user')!);
    return usuario !== null;
  };

  logOut() {
    return this.firebaseAuthenticationService.signOut()
      .then( () => {
        localStorage.removeItem('user');
        this.router.navigate(['login-admin']);
      });
  };


};
