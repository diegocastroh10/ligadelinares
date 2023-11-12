import { Injectable, NgZone } from '@angular/core';
import { Noticias } from '../interfaces/noticias.interface';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
  ) { 
    
  }

    //
    setNoticiaData(noticia: any, id: string) {
      const noticiaRef: AngularFirestoreDocument<any> = this.afs.doc(
        `noticias/${id}`
      );
      return noticiaRef.set(noticia, {
        merge: true,
      });
      /*
      El parámetro { merge: true } se utiliza para fusionar los datos con un documento existente si ya existe uno con la misma ruta, de lo contrario, se crea un nuevo documento. Esto permite actualizar los campos existentes y agregar nuevos campos según sea necesario.
      */
      
    };
  
    async getNoticiaData(noticia: any) {
      /*const userRef: AngularFirestoreDocument<any> = this.afs.doc(
        `usuarios/${user.uid}`
      );*/
      const noticiaRef = this.afs.doc(`noticias/${noticia.uid}`).valueChanges().subscribe((result:any) => {
        console.log(result);
  
        const noticiaData: Noticias = { 
          tituloNoticia: noticia.tituloNoticia,
          autorNoticia: noticia.autorNoticia,
          descripcionNoticia: noticia.descripcionNoticia,
          fechaNoticia: noticia.fechaNoticia,
          imgNoticia: noticia.imgNoticia,
          mostrarNoticia: true,
        };
  
        localStorage.setItem('user', JSON.stringify(noticiaData));
        return noticiaData;
  
      });
  
      
      console.log(noticia);
    };
}
