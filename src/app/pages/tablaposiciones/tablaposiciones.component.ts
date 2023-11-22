import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablaposiciones',
  templateUrl: './tablaposiciones.component.html',
  styleUrls: ['./tablaposiciones.component.scss']
})
export class TablaposicionesComponent {
  equipoTabla: any[] = [];
  torneos: { uid: string, equipos: any[] }[] = [];

  constructor(
    public afs: AngularFirestore,
    public router: Router,
  ) {}

  ngOnInit() {
    this.afs.collection("tablaposiciones")
      .get()
      .subscribe((querySnapshot: any) => {
        querySnapshot.forEach((doc) => {
          const data = { id: doc.id, ...doc.data() };
          this.equipoTabla.push(data);

          // Busca el torneo correspondiente o crea uno nuevo
          let torneo = this.torneos.find(t => t.uid === data.uidTorneo);
          if (!torneo) {
            torneo = { uid: data.uidTorneo, equipos: [] };
            this.torneos.push(torneo);
          }

          // Agrega el equipo al torneo
          torneo.equipos.push(data);

          return;
        });

        // Ordena las tablas de cada torneo
        this.ordenarPosicionesPorTorneo();
      }, (e) => {
        alert('Error al obtener la información.');
      });
  }

  ordenarPosicionesPorTorneo() {
    // Ordena las posiciones de cada torneo
    this.torneos.forEach(torneo => {
      torneo.equipos.sort((a, b) => a.posicionEquipo - b.posicionEquipo);
    });
  }
}





/*
import { Component } from '@angular/core';
import {
  AngularFirestore,

} from '@angular/fire/compat/firestore'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-tablaposiciones',
  templateUrl: './tablaposiciones.component.html',
  styleUrls: ['./tablaposiciones.component.scss']
})
export class TablaposicionesComponent {
  equipoTabla: any[] = [];



  constructor(
    public afs: AngularFirestore,
    public router: Router,
    
  ) {

  }

  ngOnInit(){    
    this.afs.collection("tablaposiciones")
    .get()
    .subscribe((querySnapshot:any) => {
      querySnapshot.forEach((doc) => {
        this.equipoTabla.push({id: doc.id, ...doc.data()})
        return;
      });
      this.ordenarPosicion();
    }, (e) => {
      alert('Error al obtener la información.');
    });
  }

  ordenarPosicion() {
    this.equipoTabla.sort( (a, b) => a.posicionEquipo - b.posicionEquipo);
  }


}
*/