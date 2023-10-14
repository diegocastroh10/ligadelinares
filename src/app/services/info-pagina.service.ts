/* Los services se declaran en app.module.ts en la sección providers: [], pero en este caso se usa el Injectable */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPaginaInterface } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPaginaInterface = {};
  carga = false;

  constructor( private http: HttpClient ) {
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
}  
