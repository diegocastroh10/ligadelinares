import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PartidosService } from 'src/app/services/partidos.service';


@Component({
  selector: 'app-admin-partidos-crear',
  templateUrl: './admin-partidos-crear.component.html',
  styleUrls: ['./admin-partidos-crear.component.scss']
})
export class AdminPartidosCrearComponent {
  constructor(
    public afs: AngularFirestore,
    public partidosServices: PartidosService,
    public router: Router,
  ) {

  }

  teamForm = new FormGroup({
    fechaPartido: new FormControl('', Validators.required),
    equipoLocal: new FormControl('', Validators.required),
    resultadoPartido: new FormControl('', Validators.required),
    equipoVisita: new FormControl('', Validators.required),
    mvpPartido: new FormControl('', Validators.required),
    goleadorPartido: new FormControl('', Validators.required),
    arbitrosPartido: new FormControl('', Validators.required),
    mesaPartido: new FormControl('', Validators.required),
    uidTorneo: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.partidosServices.setPartidoData(this.teamForm.value, this.afs.createId()).then( () => {
      alert('Partido agregado a la tabla.');
      this.teamForm.reset();
      this.router.navigate(['/admin-partidos']);
    })
    .catch( () => {
      alert('No ha sido posible agregar el partido a la tabla.');
    });
  };

}
