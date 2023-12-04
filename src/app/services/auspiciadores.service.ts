import { Injectable, NgZone } from '@angular/core';
import { Noticias } from '../interfaces/noticias.interface';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuspiciadoresService {

  constructor(
    public afs: AngularFirestore,
    public router: Router,
  ) { 
    
  }

  //
  setAuspiciadorData(auspiciador: any, id: string) {
    const auspiciadorRef: AngularFirestoreDocument<any> = this.afs.doc(
      `auspiciadores/${id}`
    );
    return auspiciadorRef.set(auspiciador, {
      merge: true,
    });    
  };
}
