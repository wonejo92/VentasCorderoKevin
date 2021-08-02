import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { persona } from '../modelo/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(public afs: AngularFirestore) { }

  save(persona :persona){
    const refPersona = this.afs.collection('Persona');
    if(persona.puid==null){
      persona.puid=this.afs.createId();
    }
    refPersona.doc(persona.puid).set(Object.assign({}, persona)).then(r => console.log(''));
  }

  login(correo: string,password: string): Observable<any>{
    return this.afs.collection('Persona',
      ref => ref.where('correo', '==', correo).where('password','==',password)).valueChanges();
  }
}
