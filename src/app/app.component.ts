import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin-lbdl';
  constructor(public InfoPaginaService: InfoPaginaService) {
    
  }
}
