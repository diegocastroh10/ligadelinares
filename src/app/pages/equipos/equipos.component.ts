import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss']
})
export class EquiposComponent {
  equipos: any[] = [];

  constructor(
    public afs: AngularFirestore,
    private router: Router) {
  }

  ngOnInit(){
    this.afs.collection("equipos")
    .get()
    .subscribe((querySnapshot:any) => {
      querySnapshot.forEach((doc) => {
        this.equipos.push({id: doc.id, ...doc.data()})
        return;
      });
    }, (e) => {
      alert('Error al traer información');
    })
  }
};
