import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent {
  noticias: any[] = [];

  constructor(
    private afs: AngularFirestore, 
    private router: Router) {
    // this.afs.collection('noticias').valueChanges().subscribe( (noticia: any[]) => {
    //   console.log('equipo ', equipo);
    //   this.equipos = equipo;
    // });
  }

  ngOnInit(){
    this.afs.collection("noticias", busqueda => {
     return busqueda.where('mostrarNoticia', '==', true)
     //.where('authorized', '==', true )
    })
    .get()
    .subscribe((querySnapshot:any) => {
      querySnapshot.forEach((doc) => {
        this.noticias.push({id: doc.id, ...doc.data()})
        return;
      });
    }, (e) => {
      alert('Error al obtener la información.');
    })
  }

}
