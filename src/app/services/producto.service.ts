import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: Array<any>=[];

  constructor(public afs: AngularFirestore) { }

  getProductos(): Observable<any[]>{
    return this.afs.collection('Productos').valueChanges();
  }

  agregarProducto(producto: any){
    this.productos.push(producto);
    console.log(this.productos)
    for (let index = 0; index < this.productos.length; index++) {
      localStorage.setItem('listaProductos',JSON.stringify(this.productos));
    }
  }
  
}
