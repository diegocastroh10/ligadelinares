import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuspiciadoresService } from 'src/app/services/auspiciadores.service';
import {
  AngularFirestore,

} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';

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
    private storage: AngularFireStorage,
    ) {
  }

  teamForm = new FormGroup({
    nombreAuspiciador: new FormControl('', Validators.required),
    direccionAuspiciador: new FormControl('', Validators.required),
    instagramAuspiciador: new FormControl('', Validators.required),
    imgAuspiciador: new FormControl(null, Validators.required),
    facebookAuspiciador: new FormControl('', Validators.required)
  });

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
          this.teamForm.patchValue({ imgAuspiciador: downloadURL });
  
          // Crear auspiciador
          this.equipoService
            .setAuspiciadorData(this.teamForm.value, this.afs.createId())
            .then(() => {
              alert('Auspiciador creado correctamente.');
              this.teamForm.reset();
              this.router.navigate(['/admin-auspiciadores']);
            })
            .catch(() => {
              alert('No ha sido posible crear el auspiciador.');
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
  
};
