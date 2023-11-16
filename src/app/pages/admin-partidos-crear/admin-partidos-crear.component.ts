import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  AngularFirestore,

} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { PartidosService } from 'src/app/services/partidos.service';

@Component({
  selector: 'app-admin-partidos-crear',
  templateUrl: './admin-partidos-crear.component.html',
  styleUrls: ['./admin-partidos-crear.component.scss']
})
export class AdminPartidosCrearComponent {
  constructor(
    private partidoServices: PartidosService,
    public afs: AngularFirestore,
    private router: Router) {

  }

  teamForm = new FormGroup({
    equipoLocal: new FormControl('', Validators.required),
    resultadoPartido: new FormControl('', Validators.required),
    equipoVisita: new FormControl('', Validators.required),
    fechaPartido: new FormControl('', Validators.required),
    mvpPartido: new FormControl('', Validators.required),
    goleadorPartido: new FormControl('', Validators.required),
    arbitrosPartido: new FormControl('', Validators.required),
    mesaPartido: new FormControl('', Validators.required),
    uidPartido: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.partidoServices.setPartidoData(this.teamForm.value, this.afs.createId()).then( () => {
      alert('Partido creado correctamente.');
      this.teamForm.reset();
      this.router.navigate(['admin-partidos-editar'])
    }).catch( () => {
      alert('No ha sido posible redactar su noticia.');
    });
  };
}
