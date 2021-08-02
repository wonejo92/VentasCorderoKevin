import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  productos:any

  constructor(private productosService: ProductoService, private router:Router) { }

  ngOnInit() {
    this.productos=this.productosService.getProductos();
    console.log(this.productos)
  }

  detalleP(producto:any){
    console.log(producto)
    const params: NavigationExtras={
      queryParams:{
        producto:producto
      }
    };
    this.router.navigate(['detalle'],params)
  }

}
