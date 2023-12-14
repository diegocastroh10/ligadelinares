import { Component, OnInit} from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  noticias: any[] = [];

  constructor(
    private afs: AngularFirestore, 
    private router: Router) {
  }

  ngOnInit(){
    console.log('NoticiasComponent ngOnInit called');
    this.afs.collection("noticias", busqueda => {
     return busqueda.where('mostrarNoticia', '==', true)
     .where('authorized', '==', true )
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
