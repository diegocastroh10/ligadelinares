import { Component } from '@angular/core';
import {
  AngularFirestore,

} from '@angular/fire/compat/firestore'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-partidos',
  templateUrl: './admin-partidos.component.html',
  styleUrls: ['./admin-partidos.component.scss']
})
export class AdminPartidosComponent {
  partidos: any[] = [];



  constructor(
    public afs: AngularFirestore,
    public router: Router,
    
  ) {

  }

  ngOnInit(){    
    this.afs.collection("partidos")
    .get()
    .subscribe((querySnapshot:any) => {
      querySnapshot.forEach((doc) => {
        this.partidos.push({id: doc.id, ...doc.data()})
        return;
      });
    }, (e) => {
      alert('Error al obtener la información.');
    });
  }

}
