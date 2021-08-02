import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  public productos: any=[];
  public arreglo: any=[];
  public index;

  constructor() { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos(){
    this.productos = JSON.parse(localStorage.getItem('listaProductos'));
    for (let index = 0; index < this.productos.length; index++) {
    }
    console.log(this.productos);
    console.log(this.productos.length);
  }

  eliminarProducto(producto : any){
    console.log("Producto a eliminar",producto)
    let data;
    for (let index = 0; index < this.productos.length; index++) {
      console.log(this.productos[index]['Nombre'])
      if(this.productos[index]['Nombre']==producto['Nombre']){
        data=index
        console.log(data)
      }
    }
    console.log("Este es el indice",this.index);
    var indice=this.productos.indexOf(0);
    console.log(indice)
    this.productos.splice(data,1)
    console.log("Areglo eliminao un producto",this.productos)
    localStorage.setItem('listaProductos',JSON.stringify(this.productos))

    
  }

}
