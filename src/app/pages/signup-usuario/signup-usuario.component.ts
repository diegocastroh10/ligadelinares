import { Component, OnInit } from '@angular/core';
import { AuthUsuarioService } from 'src/app/services/auth-usuario.service';

@Component({
  selector: 'app-signup-usuario',
  templateUrl: './signup-usuario.component.html',
  styleUrls: ['./signup-usuario.component.scss']
})
export class SignupUsuarioComponent implements OnInit {
  constructor(
    public authService: AuthUsuarioService
  ) {
    
  };
  
  ngOnInit(): void {
    
  };
};


