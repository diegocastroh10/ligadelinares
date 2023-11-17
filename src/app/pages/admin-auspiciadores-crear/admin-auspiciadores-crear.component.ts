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
    private auspiciadoresServices: AuspiciadoresService,
    public afs: AngularFirestore,
    private router: Router) {

  }

  teamForm = new FormGroup({
    tituloNoticia: new FormControl('', Validators.required),
    descripcionNoticia: new FormControl('', Validators.required),
    autorNoticia: new FormControl('', Validators.required),
    fechaNoticia: new FormControl('', Validators.required),
    imgNoticia: new FormControl('', Validators.required),
    mostrarNoticia: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.auspiciadoresServices.setAuspiciadorData(this.teamForm.value, this.afs.createId()).then( () => {
      alert('Noticia creada correctamente.');
      this.teamForm.reset();
      this.router.navigate(['admin-noticias-editar'])
    }).catch( () => {
      alert('No ha sido posible redactar su noticia.');
    });
  };


}
