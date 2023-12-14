import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-usuario-auspiciador',
  templateUrl: './usuario-auspiciador.component.html',
  styleUrls: ['./usuario-auspiciador.component.scss']
})
export class UsuarioAuspiciadorComponent {
  
  auspiciadores: any;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      const auspiciadorId = params['id'];

      if (auspiciadorId) {
        this.afs.collection('auspiciadores').doc(auspiciadorId)
        .get()
        .subscribe( (doc:any) => {
          if (doc.exists) {
            this.auspiciadores = { id: doc.id, ...doc.data()};
          } else {
            alert('Auspiciador no encontrado');
          };
        }, (e) => {
          alert('Error al obtener información del auspiciador');
        });
      };
    });
  };


}
