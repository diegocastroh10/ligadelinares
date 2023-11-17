import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-auspiciadores',
  templateUrl: './admin-auspiciadores.component.html',
  styleUrls: ['./admin-auspiciadores.component.scss']
})
export class AdminAuspiciadoresComponent {
  auspiciadores: any[] = [];

  constructor(
    private afs: AngularFirestore, 
    private router: Router) {
    // this.afs.collection('noticias').valueChanges().subscribe( (noticia: any[]) => {
    //   console.log('equipo ', equipo);
    //   this.equipos = equipo;
    // });
  }

  ngOnInit(){
    this.afs.collection("auspiciadores")
    .get()
    .subscribe((querySnapshot:any) => {
      querySnapshot.forEach((doc) => {
        this.auspiciadores.push({id: doc.id, ...doc.data()})
        return;
      });
    }, (e) => {
      alert('Error al obtener la información.');
    })
  }

}
