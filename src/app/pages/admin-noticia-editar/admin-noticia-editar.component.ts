import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthUsuarioService } from 'src/app/services/auth-usuario.service';
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
    private afs: AngularFirestore,
    private router: Router,
    public authService: AuthUsuarioService,
    public storage: AngularFireStorage) 
  {

  };

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id'); //enrutador id
    this.afs.collection(`noticias`).doc(this.id).valueChanges().subscribe((noticia:any) => {
      this.teamForm = new FormGroup({
        tituloNoticia: new FormControl(noticia.tituloNoticia, Validators.required),
        descripcionNoticia: new FormControl(noticia.descripcionNoticia, Validators.required),
        autorNoticia: new FormControl(noticia.autorNoticia, Validators.required),
        fechaNoticia: new FormControl(noticia.fechaNoticia, Validators.required),
        imgNoticia: new FormControl(noticia.imgNoticia),
        mostrarNoticia: new FormControl({value: noticia.mostrarNoticia, disabled: this.authService.isAuthor }),
        authorized: new FormControl(false),
        idAutor: new FormControl(noticia.idAutor),
      });
      this.isLoading = false;
    });
  }
  

  onSubmit() {
    const imgFile: File | null = this.teamForm.get('imgNoticia')?.value;

    if (imgFile instanceof File) {
      // Generar un nombre de archivo único
      const filename = `${new Date().getTime()}_${imgFile.name}`;
      
      console.log('File to be uploaded:', imgFile);
      console.log('Generated filename:', filename);
  
      // Obtener una referencia a la ruta de firebase storage
      const storageRef = this.storage.ref(filename);
  
      // Subir la imagen a firebase storage
      const uploadTask = this.storage.upload(filename, imgFile);
  
      // Obtener URL de la imagen cargada
      uploadTask.then((snapshot) => {
        snapshot.ref.getDownloadURL().then((downloadURL) => {
          // Configurar la URL de la iamgen cargada
          this.teamForm.patchValue({ imgNoticia : downloadURL });
  
          // Editar noticia
          this.noticiaService.setNoticiaData(this.teamForm.value, this.id).then( () => {
            alert('Noticia actualizada correctamente');
            this.router.navigate(['/noticias']);
          }).catch( () => {
            alert('Ocurrió un error actualizando la noticia.');
          });
        });
      });
    } else {
      console.error('Invalid file selected imgFile: ',imgFile);
    };

    
  };

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.teamForm.get('imgNoticia')?.setValue(file);
  }


  eliminarEquipo() {
    this.afs.collection('noticias').doc(this.id).delete()
    .then( () => {
      alert('Noticia eliminada.');
      this.router.navigate(['/admin-noticias-editar']);
    })
    .catch( () => {
      alert('Error al eliminar noticia, intente nuevamente.');
    });
  };

};
