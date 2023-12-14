import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoticiasService } from 'src/app/services/noticias.service';
import {
  AngularFirestore,

} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthUsuarioService } from 'src/app/services/auth-usuario.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

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
    public authService: AuthUsuarioService,
    public storage: AngularFireStorage) {

  }

  teamForm = new FormGroup({
    tituloNoticia: new FormControl('', Validators.required),
    descripcionNoticia: new FormControl('', Validators.required),
    autorNoticia: new FormControl('', Validators.required),
    fechaNoticia: new FormControl('', Validators.required),
    imgNoticia: new FormControl(null, Validators.required),
    mostrarNoticia: new FormControl({value: false, disabled: this.authService.isAuthor }),
    authorized: new FormControl(),
    idAutor: new FormControl(''),
  });

  onSubmit() {
    const user = JSON.parse(localStorage.getItem('user'));
    if(this.authService.isAuthor) {
      this.teamForm.controls['authorized'].setValue(false);
      this.teamForm.controls['mostrarNoticia'].setValue(false);
    };
    this.teamForm.controls['idAutor'].setValue(user.uid);

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
  
          // Crear noticia
          this.noticiaService.setNoticiaData(this.teamForm.value, this.afs.createId()).then( () => {
            alert('Noticia creada correctamente.');
            this.teamForm.reset();
            this.router.navigate(['admin-noticias-editar'])
          }).catch( () => {
            alert('No ha sido posible redactar su noticia.');
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
};
