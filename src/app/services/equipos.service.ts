import { Injectable, NgZone } from '@angular/core';
import { Equipos } from '../interfaces/equipos.interface';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
  ) { 
    
  }

    //
    setEquipoData(equipo: any, id: string) {
      const equipoRef: AngularFirestoreDocument<any> = this.afs.doc(
        `equipos/${id}`
      );
      return equipoRef.set(equipo, {
        merge: true,
      });
      /*
      Utilizas userRef.set(userData, { merge: true }) para almacenar los datos en el documento de Firebase Firestore. El parámetro { merge: true } se utiliza para fusionar los datos con un documento existente si ya existe uno con la misma ruta, de lo contrario, se crea un nuevo documento. Esto permite actualizar los campos existentes y agregar nuevos campos según sea necesario.
      */
      
    };
  
    async getEquipoData(equipo: any) {
      /*const userRef: AngularFirestoreDocument<any> = this.afs.doc(
        `usuarios/${user.uid}`
      );*/
      const equipoRef = this.afs.doc(`usuarios/${equipo.uid}`).valueChanges().subscribe((result:any) => {
        console.log(result);
  
        const equipoData: Equipos = { 
          uid: equipo.uid,
          nombreEquipo: equipo.nombreEquipo,
          representanteEquipo: equipo.representanteEquipo,
          imgEquipo: equipo.imgEquipo,
          rutEquipo: equipo.emailVerified,
          descripcionEquipo: equipo.descripcionEquipo,
          categoriaEquipo: equipo.categoriaEquipo,
        };
  
        localStorage.setItem('user', JSON.stringify(equipoData));
        return equipoData;
  
      });
  
      
      console.log(equipo);
    };
}
