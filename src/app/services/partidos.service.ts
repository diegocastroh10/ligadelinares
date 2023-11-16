import { Injectable } from '@angular/core';
import { Partidos } from '../interfaces/partidos.interface'; 
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PartidosService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  setPartidoData(partido:any, id:string) {
    const partidoRef: AngularFirestoreDocument<any> = this.afs.doc(`partidos/${id}`);

    return partidoRef.set(partido, {
      merge: true,
    }); 
  }
}
