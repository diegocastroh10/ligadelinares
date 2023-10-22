import { Injectable, NgZone, OnInit, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword, getAuth, signOut, authState } from '@angular/fire/auth';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUsuarioService {

  usuario: any; //userData
  auth: Auth = getAuth();

  private router = inject(Router);

  user$: Observable<any> = authState(this.auth);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  logInWithEmailAndPassword (correoUsuario: string, contrasenaUsuario: string) {
    signInWithEmailAndPassword(this.auth, correoUsuario, contrasenaUsuario)
    .then( () => {
      localStorage.setItem('token', 'true');
      alert('Se ha iniciado sesión.')
      this.router.navigate(['inicio-admin']);
      //this.usuario = userCredential.user
      //this.estadoUsuario()
    })
    .catch( () => { 
      alert('Verifica tus datos y vuelve a iniciar sesión.');
      this.router.navigate(['login-admin']);
    });
  };

  get isLoggedIn(): boolean {
    const usuario = JSON.parse(localStorage.getItem('user')!);
    return usuario !== null;
  };

  logOut() { 
    signOut(this.auth);
    localStorage.removeItem('token');
    this.router.navigate(['login-admin']);
    alert('Su sesión ha sido cerrada.')
  };

  // Función para borrar el token
  borrarToken() {
    localStorage.removeItem('user');
  };
};
/*
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
      if (userState) {
        this.ngZone.run( () => this.router.navigate(['inicio-admin']));
      } else {
        this.router.navigate(['login-admin']);
      };
    });
  };
*/

/*
  logInWithPopup() {
    return this.firebaseAuthenticationService.signInWithPopup(new GoogleAuthProvider())
      .then( () => this.estadoUsuario() )
      .catch( (error: Error) => {
        alert(error.message);
      });
  };
*/

/*
  signUpWithEmailAndPassword(correoUsuario: string, contrasenaUsuario: string) {
    return this.firebaseAuthenticationService.createUserWithEmailAndPassword(correoUsuario, contrasenaUsuario)
      .then((userCredential) => {
        this.usuario = userCredential.user
        this.estadoUsuario()
      })
      .catch((error) => {
        alert(error.message);
      })
  }
*/


