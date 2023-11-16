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
    public afs: AngularFirestore,
    ) { 

  };

  setPartidoData(partido: any, id: string) {
    const partidoRef: AngularFirestoreDocument<any> = this.afs.doc(
      `partidos/${id}`
    );
    return partidoRef.set(partido, {
      merge: true,
    });
  }; 
};
  /*
  async getPartidoData(partido: any) {
    /*const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `usuarios/${user.uid}`
    );
    const partidoRef = this.afs.doc(`partidos/${partido.uid}`).valueChanges().subscribe((result:any) => {
      console.log(result);

      const partidoData: Partidos = { 
        uidTorneo: partido.uidTorneo,
        fechaPartido: partido.fechaPartido,
        equipoLocal: partido.equipoLocal,
        equipoVisita: partido.equipoVisita,
        resultadoPartido: partido.resultadoPartido,
        mvpPartido: partido.mvpPartido,
        goleadorPartido: partido.goleadorPartido,
        arbitrosPartido: partido.arbitrosPartido,
        mesaPartido: partido.mesaPartido,

      };

      localStorage.setItem('user', JSON.stringify(partidoData));
      return partidoData;

    });
    
    
    console.log(partido);
  };
  */

