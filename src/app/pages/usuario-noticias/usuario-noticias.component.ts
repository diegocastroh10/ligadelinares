import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-noticias',
  templateUrl: './usuario-noticias.component.html',
  styleUrls: ['./usuario-noticias.component.scss']
})
export class UsuarioNoticiasComponent {

  noticias: any;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      const noticiaId = params['id'];

      if (noticiaId) {
        this.afs.collection('noticias').doc(noticiaId)
        .get()
        .subscribe( (doc:any) => {
          if (doc.exists) {
            this.noticias = { id: doc.id, ...doc.data()};
          } else {
            alert('Equipo no encontrado');
          };
        }, (e) => {
          alert('Error al obtener información del equipo');
        });
      };
    });
  };

}
