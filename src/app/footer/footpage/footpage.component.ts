import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footpage',
  templateUrl: './footpage.component.html',
  styleUrls: ['./footpage.component.scss']
})
export class FootpageComponent implements OnInit {

  //Forma de integrar el año actual en una variable y ocuparla en html usando {{ anio_actual }}
  ano_actual: number = new Date().getFullYear();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
