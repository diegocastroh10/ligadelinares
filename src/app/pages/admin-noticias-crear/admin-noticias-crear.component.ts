import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoticiasService } from 'src/app/services/noticias.service';
import {
  AngularFirestore,

} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthUsuarioService } from 'src/app/services/auth-usuario.service';

@Component({
  selector: 'app-admin-noticias-crear',
  templateUrl: './admin-noticias-crear.component.html',
  styleUrls: ['./admin-noticias-crear.component.scss']
})
export class AdminNoticiasCrearComponent {
  constructor(
    private noticiaService: NoticiasService,
    public afs: AngularFirestore,
    private router: Router,
    public authService: AuthUsuarioService) {

  }

  teamForm = new FormGroup({
    tituloNoticia: new FormControl('', Validators.required),
    descripcionNoticia: new FormControl('', Validators.required),
    autorNoticia: new FormControl('', Validators.required),
    fechaNoticia: new FormControl('', Validators.required),
    imgNoticia: new FormControl('', Validators.required),
    mostrarNoticia: new FormControl(),
    authorized: new FormControl(),
    idAutor: new FormControl('')
  });

  onSubmit() {
    const user = JSON.parse(localStorage.getItem('user'));
    if(this.authService.isAuthor) {
      this.teamForm.controls['authorized'].setValue(false);
      this.teamForm.controls['mostrarNoticia'].setValue(false);
    }
    this.teamForm.controls['idAutor'].setValue(user.uid);
    this.noticiaService.setNoticiaData(this.teamForm.value, this.afs.createId()).then( () => {
      alert('Noticia creada correctamente.');
      this.teamForm.reset();
      this.router.navigate(['admin-noticias-editar'])
    }).catch( () => {
      alert('No ha sido posible redactar su noticia.');
    });
  };

}
