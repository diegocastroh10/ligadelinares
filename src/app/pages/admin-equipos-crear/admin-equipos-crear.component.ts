import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EquiposService } from 'src/app/services/equipos.service';
import {
  AngularFirestore,

} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthUsuarioService } from 'src/app/services/auth-usuario.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-admin-equipos-crear',
  templateUrl: './admin-equipos-crear.component.html',
  styleUrls: ['./admin-equipos-crear.component.scss']
})
export class AdminEquiposCrearComponent {
  constructor(
    private equipoService: EquiposService,
    private afs: AngularFirestore,
    private router: Router,
    public authService: AuthUsuarioService,
    public storage: AngularFireStorage) {
  }

  teamForm = new FormGroup({
    nombreEquipo: new FormControl('', Validators.required),
    descripcionEquipo: new FormControl('', Validators.required),
    categoriaEquipo: new FormControl('', Validators.required),
    representanteEquipo: new FormControl('', Validators.required),
    rutEquipo: new FormControl('', Validators.required),
    imgEquipo: new FormControl(null, Validators.required)
  });

  onSubmit() {
    const user = JSON.parse(localStorage.getItem('user'));

    const imgFile: File | null = this.teamForm.get('imgEquipo')?.value;

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
          this.teamForm.patchValue({ imgEquipo : downloadURL });
  
          // Crear noticia
          this.equipoService.setEquipoData(this.teamForm.value, this.afs.createId()).then( () => {
            alert('Equipo creado correctamente.');
            this.teamForm.reset();
            this.router.navigate(['/equipos']);
          }).catch( () => {
            alert('No ha sido posible crear el equipo.');
          });
        });
      });
    } else {
      console.error('Invalid file selected imgFile: ',imgFile);
    };
  };

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.teamForm.get('imgEquipo')?.setValue(file);
  };  
};
