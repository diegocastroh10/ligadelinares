import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-equipos-editar',
  templateUrl: './admin-equipos-editar.component.html',
  styleUrls: ['./admin-equipos-editar.component.scss']
})
export class AdminEquiposEditarComponent {

  equipos: any[] = [];

  constructor(
    public afs: AngularFirestore,
    private router: Router) {
    // this.afs.collection('equipos').valueChanges().subscribe( (equipo: any[]) => {
    //   console.log('equipo ', equipo);
    //   this.equipos = equipo;
    // });
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
      alert('error al traer informacion');
    })
  }
}
