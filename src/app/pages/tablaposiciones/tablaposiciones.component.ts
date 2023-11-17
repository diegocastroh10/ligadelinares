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
