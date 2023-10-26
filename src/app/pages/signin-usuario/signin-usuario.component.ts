import { Component, OnInit } from '@angular/core';
import { AuthUsuarioService } from 'src/app/services/auth-usuario.service';

@Component({
  selector: 'app-signin-usuario',
  templateUrl: './signin-usuario.component.html',
  styleUrls: ['./signin-usuario.component.scss']
})
export class SigninUsuarioComponent implements OnInit {
  constructor(
    public authService: AuthUsuarioService
  ) {
    
  };
  
  ngOnInit(): void {
    
  };

}
