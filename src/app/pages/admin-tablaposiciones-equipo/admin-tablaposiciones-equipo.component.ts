import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TablaPosicionesService } from 'src/app/services/tabla-posiciones.service';


@Component({
  selector: 'app-admin-tablaposiciones-equipo',
  templateUrl: './admin-tablaposiciones-equipo.component.html',
  styleUrls: ['./admin-tablaposiciones-equipo.component.scss']
})
export class AdminTablaposicionesEquipoComponent {
  constructor(
    public afs: AngularFirestore,
    public tablaposicionesService: TablaPosicionesService,
  ) {

  }

  teamForm = new FormGroup({
    nombreEquipo: new FormControl('', Validators.required),
    masMenosEquipo: new FormControl('', Validators.required),
    partidosJugados: new FormControl('', Validators.required),
    posicionEquipo: new FormControl('', Validators.required),
    puntajeTorneo: new FormControl('', Validators.required),
    puntosContra: new FormControl('', Validators.required),
    puntosFavor: new FormControl('', Validators.required),
    uidTorneo: new FormControl('', Validators.required),
  })

  onSubmit() {
    this.tablaposicionesService.setEquipoTabla(this.teamForm.value, this.afs.createId()).then( () => {
      alert('Equipo agregado a la tabla.');
      this.teamForm.reset();
    })
    .catch( () => {
      alert('No ha sido posible agregar el equipo a la tabla');
    });
  };

};
