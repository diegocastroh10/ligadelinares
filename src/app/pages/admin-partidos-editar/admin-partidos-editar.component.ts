import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PartidosService } from 'src/app/services/partidos.service';

@Component({
  selector: 'app-admin-partidos-editar',
  templateUrl: './admin-partidos-editar.component.html',
  styleUrls: ['./admin-partidos-editar.component.scss']
})
export class AdminPartidosEditarComponent {
  id: string;
  teamForm:FormGroup;
  isLoading: boolean = true;

  constructor(
    public afs: AngularFirestore,
    public partidosServices: PartidosService,
    public router: Router,
    public route: ActivatedRoute,
  ) {

  };

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id'); //enrutador id
    this.afs.collection(`partidos`).doc(this.id).valueChanges().subscribe((partido:any) => {
      this.teamForm = new FormGroup({
        equipoLocal: new FormControl(partido.equipoLocal, Validators.required),
        equipoVisita: new FormControl(partido.equipoVisita, Validators.required),
        fechaPartido: new FormControl(partido.fechaPartido, Validators.required),
        resultadoPartido: new FormControl(partido.resultadoPartido, Validators.required),
        mvpPartido: new FormControl(partido.mvpPartido, Validators.required),
        goleadorPartido: new FormControl(partido.goleadorPartido, Validators.required),
        arbitrosPartido: new FormControl(partido.arbitrosPartido, Validators.required),
        uidPartido: new FormControl(partido.uidPartido, Validators.required),
        mesaPartido: new FormControl(partido.mesaPartido, Validators.required),
      });
      this.isLoading = false;
    });
  };

  onSubmit() {
    this.partidosServices.setPartidoData(this.teamForm.value, this.id).then( () => {
      alert('Partido actualizado correctamente.');
      this.router.navigate(['/admin-partidos']);
    }).catch( () => {
      alert('Ocurrió un error actualizando el equipo.');
    });
  };

  eliminarPartido() {
    this.afs.collection('partidos').doc(this.id).delete()
    .then( () => {
      alert('Partido eliminado de la tabla.');
      this.router.navigate(['/admin-partidos']);
    })
    .catch( () => {
      alert('Error al eliminar el partido, intente nuevamente.');
    });
  };
}
