import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuspiciadoresService } from 'src/app/services/auspiciadores.service';
import {
  AngularFirestore,

} from '@angular/fire/compat/firestore';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-auspiciadores-editar',
  templateUrl: './admin-auspiciadores-editar.component.html',
  styleUrls: ['./admin-auspiciadores-editar.component.scss']
})
export class AdminAuspiciadoresEditarComponent {
  id: string;
  teamForm:FormGroup;
  isLoading: boolean = true;
  constructor(
    private auspiciadoresServices: AuspiciadoresService, 
    private route: ActivatedRoute, 
    private afs: AngularFirestore,
    private router: Router,
    ) 
  {

  };

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id'); //enrutador id
    this.afs.collection(`auspiciadores`).doc(this.id).valueChanges().subscribe((auspiciador:any) => {
      this.teamForm = new FormGroup({
        nombreAuspiciador: new FormControl(auspiciador.nombreAuspiciador, Validators.required),
        direccionAuspiciador: new FormControl(auspiciador.direccionAuspiciador, Validators.required),
        instagramAuspiciador: new FormControl(auspiciador.instagramAuspiciador, Validators.required),
        facebookAuspiciador: new FormControl(auspiciador.facebookAuspiciador, Validators.required),
        imgAuspiciador: new FormControl(auspiciador.imgAuspiciador, Validators.required),
      });
      this.isLoading = false;
    });
  };

  onSubmit() {
    this.auspiciadoresServices.setAuspiciadorData(this.teamForm.value, this.id).then( () => {
      alert('Auspiciador actualizado correctamente.');
      this.router.navigate(['/admin-auspiciadores'])
    }).catch( () => {
      alert('Ocurrió un error modificando tu auspiciador.');
    });
  };

  eliminarAuspiciador() {
    this.afs.collection('auspiciadores').doc(this.id).delete()
    .then( () => {
      alert('Auspiciador eliminado.');
      this.router.navigate(['/admin-auspiciadores']);
    })
    .catch( () => {
      alert('Error al eliminar auspiciador, intente nuevamente.');
    });
  };

}
