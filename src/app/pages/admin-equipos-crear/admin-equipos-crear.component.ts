import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EquiposService } from 'src/app/services/equipos.service';
import {
  AngularFirestore,

} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-admin-equipos-crear',
  templateUrl: './admin-equipos-crear.component.html',
  styleUrls: ['./admin-equipos-crear.component.scss']
})
export class AdminEquiposCrearComponent {
  constructor(
    private equipoService: EquiposService,
    public afs: AngularFirestore) {
  }

  teamForm = new FormGroup({
    nombreEquipo: new FormControl('', Validators.required),
    descripcionEquipo: new FormControl('', Validators.required),
    categoriaEquipo: new FormControl('', Validators.required),
    representanteEquipo: new FormControl('', Validators.required),
    rutEquipo: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.equipoService.setEquipoData(this.teamForm.value, this.afs.createId()).then( () => {
      alert('Equipo creado correctamente.');
      this.teamForm.reset();
    }).catch( () => {
      alert('No ha sido posible crear el equipo.');
    });


  }
}
