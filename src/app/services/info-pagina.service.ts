/* Los services se declaran en app.module.ts en la sección providers: [], pero en este caso se usa el Injectable */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPaginaInterface } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPaginaInterface = {};
  usuarios: any[] = [];
  carga = false;

  constructor( private http: HttpClient ) {
    this.cargarInfoPagina();
    this.cargarUsuarios();
  };

  //FUNCIONES PARA CARGAR DATOS DE FIREBASE
  private cargarInfoPagina() {
    console.log('CARGANDO LIGA BASQUETBOL DE LINARES');

    //Leer archivo JSON infoPagina
    this.http.get('assets/data/datos-pagina.json')
    .subscribe( (resp: InfoPaginaInterface) => {
      this.carga = true;
      this.info = resp;
      console.log( resp );
      console.log(resp.titulo);  
    });
  };

  private cargarUsuarios() {
    console.log('CARANDO USUARIOS LBDL');
    this.http.get('https://ligadelinares-default-rtdb.firebaseio.com/usuarios.json')
    .subscribe( (resp: any) => {
      this.usuarios = resp;
      console.log( resp );
      console.log( resp.idUsuario );
    });
  };
};