import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-noticias-editar',
  templateUrl: './admin-noticias-editar.component.html',
  styleUrls: ['./admin-noticias-editar.component.scss']
})
export class AdminNoticiasEditarComponent {
  noticias: any[] = [];

  constructor(
    public afs: AngularFirestore, 
    private router: Router) {
    // this.afs.collection('noticias').valueChanges().subscribe( (noticia: any[]) => {
    //   console.log('equipo ', equipo);
    //   this.equipos = equipo;
    // });
  }

  ngOnInit(){
    this.afs.collection("noticias")
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