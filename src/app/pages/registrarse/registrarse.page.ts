import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/modelo/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  persona: persona = new persona();

  constructor(private personaService: PersonaService,private router: Router) { }

  ngOnInit() {
  }

  registrase(){
    console.log(this.persona)
    this.personaService.save(this.persona)
    this.router.navigate(['iniciarsesion']);
    
  }
}
