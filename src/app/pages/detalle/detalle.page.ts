import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  producto: any;
  private productos: Array<any>=[];

  constructor(private router: Router,  private route: ActivatedRoute, private productoService:ProductoService) {
    //Get params
    route.queryParams.subscribe(params=>{
    console.log('Son los parametros de llegada',params);
    if(this.router.getCurrentNavigation().extras.queryParams){
    this.producto=this.router.getCurrentNavigation().extras.queryParams.producto;
    console.log('Dettale del producto :',this.producto);
    }
    });


   }

  ngOnInit() {
  }

  AgregarCArrito(){
    console.log("Producto a agregar al carrito",this.producto)
    this.productoService.agregarProducto(this.producto)
    this.router.navigate(['home'])
  }

}
