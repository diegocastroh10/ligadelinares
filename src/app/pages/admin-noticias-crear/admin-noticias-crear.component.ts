import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoticiasService } from 'src/app/services/noticias.service';
import {
  AngularFirestore,

} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-admin-noticias-crear',
  templateUrl: './admin-noticias-crear.component.html',
  styleUrls: ['./admin-noticias-crear.component.scss']
})
export class AdminNoticiasCrearComponent {
  constructor(
    private noticiaService: NoticiasService,
    public afs: AngularFirestore) {

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
    this.noticiaService.setNoticiaData(this.teamForm.value, this.afs.createId()).then( () => {
      alert('Noticia creada correctamente.');
      this.teamForm.reset();
    }).catch( () => {
      alert('No ha sido posible redactar su noticia.');
    });
  }

}
