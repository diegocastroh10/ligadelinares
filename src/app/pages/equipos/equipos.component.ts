import { Component } from '@angular/core';
import { AuthUsuarioService } from 'src/app/services/auth-usuario.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss']
})
export class EquiposComponent {
  equipos: Observable<any[]>;
  
  constructor(
    public authService: AuthUsuarioService,
    public afs: AngularFirestore) {
        this.equipos = this.afs.collection('equipos').valueChanges();
      }
};
