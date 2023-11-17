import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuspiciadoresService } from 'src/app/services/auspiciadores.service';
import {
  AngularFirestore,

} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-auspiciadores-crear',
  templateUrl: './admin-auspiciadores-crear.component.html',
  styleUrls: ['./admin-auspiciadores-crear.component.scss']
})
export class AdminAuspiciadoresCrearComponent {
  constructor(
    private equipoService: AuspiciadoresService,
    private afs: AngularFirestore,
    private router: Router,
    ) {
  }

  teamForm = new FormGroup({
    nombreAuspiciador: new FormControl('', Validators.required),
    direccionAuspiciador: new FormControl('', Validators.required),
    instagramAuspiciador: new FormControl('', Validators.required),
    imgAuspiciador: new FormControl('', Validators.required),
    facebookAuspiciador: new FormControl('', Validators.required)
  });

  onSubmit() {
    this.equipoService.setAuspiciadorData(this.teamForm.value, this.afs.createId()).then( () => {
      alert('Auspiciador creado correctamente.');
      this.teamForm.reset();
      this.router.navigate(['/admin-auspiciadores']);
    }).catch( () => {
      alert('No ha sido posible crear el auspiciador.');
    });


  }
  


}
