import { Component } from '@angular/core';
import { AuthUsuarioService } from 'src/app/services/auth-usuario.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent {
  constructor(public authService: AuthUsuarioService) {}
  ngOnInit(): void {}
}
