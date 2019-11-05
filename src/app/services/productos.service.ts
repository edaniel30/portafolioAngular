import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { resolve } from 'path';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productoFiltrado: Producto[] = [];

  constructor( private http: HttpClient) {
    this.cargarProductos();
   }

   private cargarProductos() {

      // tslint:disable-next-line: variable-name
      // tslint:disable-next-line: no-shadowed-variable
      return new Promise(( resolve, reject) => {

        this.http.get('https://angular-pruebas-99ff2.firebaseio.com/productos_idx.json')
        // tslint:disable-next-line: align
          .subscribe((resp: Producto[]) => {
        this.productos = resp;
        this.cargando = false;
        resolve();
        });
      });

    }
    getProducto(id: string) {

      return this.http.get(`https://angular-pruebas-99ff2.firebaseio.com/productos/${id}.json`);

    }

    // tslint:disable-next-line: ban-types
    buscarProducto(termino: string) {

      if (this.productos.length === 0) {
        // cargar productos
        this.cargarProductos().then(() => {
          // ejecutar despues de tener los productos
          // aplicar filtro
          this.filtrarProductos(termino);

        });
      } else {
        // aplicar filtro
        this.filtrarProductos(termino);
      }
    }

    // tslint:disable-next-line: ban-types
    private filtrarProductos(termino: string) {
      // console.log(this.productoFiltrado);
      this.productoFiltrado = [];

      termino = termino.toLocaleLowerCase();

      this.productos.forEach(prod => {

        const tituloLower = prod.titulo.toLocaleLowerCase();

        if (prod.categoria.indexOf (termino) >= 0 || tituloLower.indexOf(termino) >= 0 ) {
            this.productoFiltrado.push( prod );
        }
      });

    }
}
