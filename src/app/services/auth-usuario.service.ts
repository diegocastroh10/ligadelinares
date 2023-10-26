import { Injectable, NgZone } from '@angular/core';
import { AuthUsuarios } from '../interfaces/auth-usuarios.interface';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth, getAuth, authState } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthUsuarioService {
  userData: any;

  //auth: Auth = getAuth();
  //user$: Observable<any> = authState(this.auth);

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    /* Guardar los datos del usuario en el LocalStorge cuando 
    Inicia sesión y dejarlo como null cuando se cierra la sesión */
    this.afAuth.authState.subscribe( (user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      };
    });

  };

  signIn(correoUsuario:string, contrasenaUsuario:string) {
    return this.afAuth
      .signInWithEmailAndPassword(correoUsuario,contrasenaUsuario)
      .then( (result) => {
        this.setUserData(result.user);
        this.afAuth.authState.subscribe( (user) => {
          if (user) {
            console.log('Se ha iniciado sesión.')
            this.router.navigate(['inicio-admin']);
          };
        });
      })
      .catch ( (error) => {
        window.alert(error.message);
      });
  };

  //INICIAR SESIÓN CON CORREO Y CONTRASEÑA
  signUp(correoUsuario:string, contrasenaUsuario:string) {
    return this.afAuth
      .createUserWithEmailAndPassword(correoUsuario, contrasenaUsuario)
      .then( (result) => {
        this.sendVerificationMail();
        this.setUserData(result.user);
      })
      .catch ( () => {
        window.alert('error.message');
      });
  };

  //ENVIAR CORREO DE VERIFICACIÓN AL REGISTRARSE
  sendVerificationMail() {
    return this.afAuth.currentUser
      .then( (u:any) => u.sendEmailVerification())
      .then( () => {
        this.router.navigate(['verify-usuario']);
      });
  };

  //REINICIAR CONTRASEÑA
  forgotPassword(contrasenaNueva: string) {
    return this.afAuth
      .sendPasswordResetEmail(contrasenaNueva)
      .then( () => {
        window.alert('Correo de reinicio de contraseña enviado, revisa tu bandeja de entrada.')
      })
      .catch ( (error) => {
        window.alert(error);
      });
  };

  get isVerify(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `usuarios/${user.uid}`
    );
    const userData: AuthUsuarios = { 
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    }

    return userRef.set(userData, {
      merge: true,
    });
  };

  //CERRAR SESIÓN Y BORRAR TOKEN
  signOut() {
    return this.afAuth.signOut().then( () => {
      localStorage.removeItem('user');
      this.router.navigate(['login-usuario']);
    });
  };


};






























/*import { Injectable, NgZone, OnInit, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword, getAuth, signOut, authState } from '@angular/fire/auth';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUsuarios } from '../interfaces/auth-usuarios.interface';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { getFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthUsuarioService {

  //usuario: any; //userData
  auth: Auth = getAuth();

  private router = inject(Router);

  

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
/*
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
*/
/*
  // Función para borrar el token
  borrarToken() {
    localStorage.removeItem('user');
  };
*/


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


