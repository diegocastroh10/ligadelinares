import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUsuarioService } from 'src/app/services/auth-usuario.service';

@Component({
  selector: 'app-admin-noticias-editar',
  templateUrl: './admin-noticias-editar.component.html',
  styleUrls: ['./admin-noticias-editar.component.scss']
})
export class AdminNoticiasEditarComponent {
  noticias: any[] = [];

  constructor(
    private afs: AngularFirestore,
    private router: Router,
    public authService: AuthUsuarioService) {
    // this.afs.collection('noticias').valueChanges().subscribe( (noticia: any[]) => {
    //   console.log('equipo ', equipo);
    //   this.equipos = equipo;
    // });
  }

  ngOnInit() {
    if (this.authService.isAuthor) {
      const user = JSON.parse(localStorage.getItem('user'));
      this.afs.collection("noticias", ref => {
        return ref
          .where('idAutor', "==", user.uid)
      }
      )
        .get()
        .subscribe((querySnapshot: any) => {
          querySnapshot.forEach((doc) => {
            this.noticias.push({ id: doc.id, ...doc.data() })
            return;
          });
        }, (e) => {
          alert('Error al obtener la información.');
        })
    } else {
      this.afs.collection("noticias")
        .get()
        .subscribe((querySnapshot: any) => {
          querySnapshot.forEach((doc) => {
            this.noticias.push({ id: doc.id, ...doc.data() })
            return;
          });
        }, (e) => {
          alert('Error al obtener la información.');
        })
    }
  }

  autorizar(id) {
    this.afs.collection("noticias").doc(id).update({ authorized: true }).then(() => {
      alert('actualizado correctamente');
    }, (e) => {
      alert('fallo actualizacion');
    })
  }
}