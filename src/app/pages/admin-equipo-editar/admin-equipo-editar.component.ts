import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-admin-equipo-editar',
  templateUrl: './admin-equipo-editar.component.html',
  styleUrls: ['./admin-equipo-editar.component.scss']
})
export class AdminEquipoEditarComponent {

  id: string;
  teamForm:FormGroup;
  isLoading: boolean = true;
  constructor(private equipoService: EquiposService, private route: ActivatedRoute, private afs: AngularFirestore) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.afs.collection(`equipos`).doc(this.id).valueChanges().subscribe((equipo:any) => {
      this.teamForm = new FormGroup({
        nombreEquipo: new FormControl(equipo.nombreEquipo, Validators.required),
        descripcionEquipo: new FormControl(equipo.descripcionEquipo, Validators.required),
        categoriaEquipo: new FormControl(equipo.categoriaEquipo, Validators.required),
        representanteEquipo: new FormControl(equipo.representanteEquipo, Validators.required),
        rutEquipo: new FormControl(equipo.rutEquipo, Validators.required),
      });
      this.isLoading = false;
    });
  }

  onSubmit() {
    this.equipoService.setEquipoData(this.teamForm.value, this.id).then( () => {
      alert('Equipo Actualizado correctamente');
    }).catch( () => {
      alert('Ocurrió un error actualizando el equipo');
    });
  }

}
