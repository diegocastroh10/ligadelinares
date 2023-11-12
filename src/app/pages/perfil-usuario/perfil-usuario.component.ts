import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent {
  usuario: any;

  id: string;
  isLoading: boolean = true;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.afAuth.authState.subscribe( usuario => {
      if (usuario) {
        this.afs.collection(`usuarios`).doc(usuario.uid).valueChanges().subscribe( usuario => {
          this.usuario = usuario;
        })
        this.usuario = usuario;
      }
    })

    
  }

};
