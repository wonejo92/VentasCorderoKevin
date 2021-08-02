import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { persona } from 'src/app/modelo/persona';
import { PersonaService } from 'src/app/services/persona.service';

import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.page.html',
  styleUrls: ['./iniciarsesion.page.scss'],
})
export class IniciarsesionPage implements OnInit {

  persona:persona= new persona();

  constructor(private router: Router,private personaService:PersonaService,private toastCtr: ToastController,
    private afsAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async login(){
    console.log(this.persona)
    const correo=this.persona.correo
    const password=this.persona.password
    this.personaService.login(correo,password).subscribe(data=>{
      this.persona=data[0]
      try{
        if(this.persona.correo==correo && this.persona.password==password){
          this.router.navigate(['home']);
        }else{
          alert("Credenciales incorrectas")
        }
      }
      catch(error){console.log('Error: ->', error);
      this.presentToast();
      this.router.navigate(['iniciarsesion']);}

    })

  }
  registrase(){
    this.router.navigate(['registrarse'])
  }

  async presentToast(){
    const toast = await this.toastCtr.create({
      message:'Credenciales Incorrectas.',
      mode:'ios',
      duration:2000,
      position:'top'
    });
    toast.present();
  }

  async loginWithGoogle(){
    console.log('Logeando con GOOGLE.');
    //const user = await this.afsAuth.signInWithPopup(new auth.GoogleAuthProvider)
    const user = await this.afsAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
    //const user = await this.afsAuth.signInWithRedirect(new firebase.default.auth.GoogleAuthProvider)
    const name=user.additionalUserInfo.profile['given_name'];
    const lastn=user.additionalUserInfo.profile['family_name'];
    const messge=' Hola  '+ name +' ' + lastn;
    alert(messge);
    this.router.navigate(['home']);
  }
  
}
