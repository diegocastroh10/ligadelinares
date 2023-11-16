import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TablaPosicionesService {

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,

    ) { 

  };

  setEquipoTabla(equipo:any, id:string) {
    const tablaRef: AngularFirestoreDocument<any> = this.afs.doc(`tablaposiciones/${id}`);

    return tablaRef.set(equipo, {
      merge: true,
    });
  };
  

};
