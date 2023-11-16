import { Component } from '@angular/core';
import {
  AngularFirestore,

} from '@angular/fire/compat/firestore'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-tablaposiciones',
  templateUrl: './admin-tablaposiciones.component.html',
  styleUrls: ['./admin-tablaposiciones.component.scss']
})
export class AdminTablaposicionesComponent {
  equipoTabla: any[] = [];



  constructor(
    public afs: AngularFirestore,
    public router: Router,
    
  ) {

  }

  ngOnInit(){    
    this.afs.collection("tablaposiciones")
    .get()
    .subscribe((querySnapshot:any) => {
      querySnapshot.forEach((doc) => {
        this.equipoTabla.push({id: doc.id, ...doc.data()})
        return;
      });
      this.ordenarPosicion();
    }, (e) => {
      alert('Error al obtener la información.');
    });
  }

  ordenarPosicion() {
    this.equipoTabla.sort( (a, b) => a.posicionEquipo - b.posicionEquipo);
  }


}
  /*
  constructor(
    public tablaposicionesService: TablaPosicionesService,
    public equipoService: EquiposService,
    public afs: AngularFirestore,
  ) {

  }

  getEquipo(): Observable<Equipos[]> {
    return this.afs.collection<Equipos>('equipos').valueChanges();
  }

  teamForm = new FormGroup({
    rutEquipo : new FormControl('', Validators.required),
    masMenosTorneo: new FormControl('', Validators.required),
    partidosJugados: new FormControl('', Validators.required),
    posicionEquipo: new FormControl('', Validators.required),
    puntajeTorneo: new FormControl('', Validators.required),
    puntosContra: new FormControl('', Validators.required),
    puntosFavor: new FormControl('', Validators.required),
    uidTorneo: new FormControl('', Validators.required),

  });
  */

  
  /*
  equipos: any[] = [];

  constructor(
    private tablaService: TablaPosicionesService,
    private afs: AngularFirestore,
  ) {
    
  };

  ngOnInit() {

  }

  addEquipoTable() {   
        //obtener equipo
        this.afs.collection('equipos')
        .get()
        .subscribe( (querySnapshot:any) => {
          querySnapshot.forEach( (doc) => {
            let equipo = this.equipos.push({id: doc.id, ...doc.data()})
    
            return equipo;
          });
          }, (e) => {
            alert('error al traer informacion');
          })

    this.tablaService.addEquipo(this.equipos)
    .then( () => {
      alert('Equipo agregado a tabla posiciones.');
    })
    .catch( () => {
      alert('Error al agregar el equipo a tablaposiciones.');
    })

  }
  */





  /*
  constructor(
    private tablaposicionesService: tablaPosicionesService,
    public afs: AngularFirestore) {

  }

  teamForm = new FormGroup({
    nombreEquipo: new FormControl('', Validators.required),
    descripcionEquipo: new FormControl('', Validators.required),
    categoriaEquipo: new FormControl('', Validators.required),
    representanteEquipo: new FormControl('', Validators.required),
    rutEquipo: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.tablaPosicionesService.setEquipoData(this.teamForm.value, this.afs.createId()).then( () => {
      alert('Equipo creado correctamente.');
      this.teamForm.reset();
    }).catch( () => {
      alert('No ha sido posible crear el equipo.');
    });
  }
  */

