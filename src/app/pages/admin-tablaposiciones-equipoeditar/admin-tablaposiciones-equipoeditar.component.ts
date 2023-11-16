import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TablaPosicionesService } from 'src/app/services/tabla-posiciones.service';

@Component({
  selector: 'app-admin-tablaposiciones-equipoeditar',
  templateUrl: './admin-tablaposiciones-equipoeditar.component.html',
  styleUrls: ['./admin-tablaposiciones-equipoeditar.component.scss']
})
export class AdminTablaposicionesEquipoeditarComponent {

  id: string;
  teamForm:FormGroup;
  isLoading: boolean = true;

  constructor(
    public afs: AngularFirestore,
    public tablaposicionesService: TablaPosicionesService,
    public router: Router,
    public route: ActivatedRoute,
  ) {

  };

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id'); //enrutador id
    this.afs.collection(`tablaposiciones`).doc(this.id).valueChanges().subscribe((equipoTabla:any) => {
      this.teamForm = new FormGroup({
        nombreEquipo: new FormControl(equipoTabla.nombreEquipo, Validators.required),
        masMenosTorneo: new FormControl(equipoTabla.masMenosTorneo, Validators.required),
        partidosJugados: new FormControl(equipoTabla.partidosJugados, Validators.required),
        posicionEquipo: new FormControl(equipoTabla.posicionEquipo, Validators.required),
        puntajeEquipo: new FormControl(equipoTabla.puntajeEquipo, Validators.required),
        puntosContra: new FormControl(equipoTabla.puntosContra, Validators.required),
        puntosFavor: new FormControl(equipoTabla.puntosFavor, Validators.required),
        uidTorneo: new FormControl(equipoTabla.uidTorneo, Validators.required),
        rutEquipo: new FormControl(equipoTabla.rutEquipo, Validators.required),
        partidosGanados: new FormControl(equipoTabla.partidosGanados, Validators.required),
        partidosPerdidos: new FormControl(equipoTabla.partidosPerdidos, Validators.required),
      });
      this.isLoading = false;
    });
  };

  onSubmit() {
    this.tablaposicionesService.setEquipoTabla(this.teamForm.value, this.id).then( () => {
      alert('Equipo actualizado correctamente.');
      this.router.navigate(['/admin-tablaposiciones']);
    }).catch( () => {
      alert('Ocurrió un error actualizando el equipo.');
    });
  };

  eliminarEquipo() {
    this.afs.collection('tablaposiciones').doc(this.id).delete()
    .then( () => {
      alert('Equipo eliminado de la tabla de posiciones.');
      this.router.navigate(['/admin-tablaposiciones']);
    })
    .catch( () => {
      alert('Error al eliminar equipo, intente nuevamente.');
    });
  };
};
