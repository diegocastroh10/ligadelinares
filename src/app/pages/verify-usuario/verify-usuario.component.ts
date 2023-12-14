import { Component, OnInit } from '@angular/core';
import { AuthUsuarioService } from 'src/app/services/auth-usuario.service';

@Component({
  selector: 'app-verify-usuario',
  templateUrl: './verify-usuario.component.html',
  styleUrls: ['./verify-usuario.component.scss']
})
export class VerifyUsuarioComponent{
  constructor(
    public authService: AuthUsuarioService,
  ) { }

}
