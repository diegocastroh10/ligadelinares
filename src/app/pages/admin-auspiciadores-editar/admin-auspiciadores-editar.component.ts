import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuspiciadoresService } from 'src/app/services/auspiciadores.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

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
    private auspiciadorService: AuspiciadoresService, 
    private route: ActivatedRoute, 
    private afs: AngularFirestore,
    private router: Router,
    public storage: AngularFireStorage) 
  {

  };

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id'); //enrutador id
    this.afs.collection(`auspiciadores`).doc(this.id).valueChanges().subscribe((auspiciador:any) => {
      this.teamForm = new FormGroup({
        nombreAuspiciador: new FormControl(auspiciador.nombreAuspiciador, Validators.required),
        direccionAuspiciador: new FormControl(auspiciador.direccionAuspiciador, Validators.required),
        imgAuspiciador: new FormControl(auspiciador.imgAuspiciador),
        facebookAuspiciador: new FormControl(auspiciador.facebookAuspiciador, Validators.required),
        instagramAuspiciador: new FormControl(auspiciador.instagramAuspiciador, Validators.required),
      });
      this.isLoading = false;
    });
  }
  

  onSubmit() {
    const imgFile: File | null = this.teamForm.get('imgAuspiciador')?.value;

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
          this.teamForm.patchValue({ imgAuspiciador : downloadURL });
  
          // Editar noticia
          this.auspiciadorService.setAuspiciadorData(this.teamForm.value, this.id).then( () => {
            alert('Auspiciador actualizado correctamente');
            this.router.navigate(['/auspiciadores']);
          }).catch( () => {
            alert('Ocurrió un error actualizando el Auspiciador.');
          });
        });
      });
    } else {
      console.error('Invalid file selected imgFile: ',imgFile);
    };

    
  };

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.teamForm.get('imgAuspiciador')?.setValue(file);
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

}
