import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-equipo',
  templateUrl: './usuario-equipo.component.html',
  styleUrls: ['./usuario-equipo.component.scss']
})
export class UsuarioEquipoComponent implements OnInit {
  /*
  equipos : any[] = [];

  constructor(
    private route: ActivatedRoute, 
    private afs: AngularFirestore) {
  }

  ngOnInit():void {
    this.afs.collection('equipos')
    .get()
    .subscribe((querySnapshot:any) => {
      querySnapshot.forEach((doc) => {
        this.equipos.push({id:doc.id, ...doc.data()})
      })
    }, (e) => {
      alert('Error al traer información')
    })   */
  
  equipo: any;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      const equipoId = params['id'];

      if (equipoId) {
        this.afs.collection('equipos').doc(equipoId)
        .get()
        .subscribe( (doc:any) => {
          if (doc.exists) {
            this.equipo = { id: doc.id, ...doc.data()};
          } else {
            alert('Equipo no encontrado');
          };
        }, (e) => {
          alert('Error al obtener información del equipo');
        });
      };
    });
  };
};

