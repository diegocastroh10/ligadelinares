import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-admin-noticia-editar',
  templateUrl: './admin-noticia-editar.component.html',
  styleUrls: ['./admin-noticia-editar.component.scss']
})
export class AdminNoticiaEditarComponent {
  id: string;
  teamForm:FormGroup;
  isLoading: boolean = true;
  constructor(
    private noticiaService: NoticiasService, 
    private route: ActivatedRoute, 
    private afs: AngularFirestore) 
  {

  };

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id'); //enrutador id
    this.afs.collection(`noticias`).doc(this.id).valueChanges().subscribe((noticia:any) => {
      this.teamForm = new FormGroup({
        tituloNoticia: new FormControl(noticia.tituloNoticia, Validators.required),
        autorNoticia: new FormControl(noticia.autorNoticia, Validators.required),
        descripcionNoticia: new FormControl(noticia.descripcionNoticia, Validators.required),
        fechaNoticia: new FormControl(noticia.fechaNoticia, Validators.required),
        mostrarNoticia: new FormControl(noticia.mostrarNoticia),
        imgNoticia: new FormControl(noticia.imgNoticia, Validators.required),
      });
      this.isLoading = false;
    });
  };

  onSubmit() {
    this.noticiaService.setNoticiaData(this.teamForm.value, this.id).then( () => {
      alert('Noticia actualizada correctamente.');
    }).catch( () => {
      alert('Ocurrió un error modificando tu noticia.');
    });
  };

};
