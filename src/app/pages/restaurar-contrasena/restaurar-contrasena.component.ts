import { Component, OnInit } from '@angular/core';
import { AuthUsuarioService } from 'src/app/services/auth-usuario.service';

@Component({
  selector: 'app-restaurar-contrasena',
  templateUrl: './restaurar-contrasena.component.html',
  styleUrls: ['./restaurar-contrasena.component.scss']
})
export class RestaurarContrasenaComponent implements OnInit {
  constructor(
    public authService: AuthUsuarioService,
  ) {
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
