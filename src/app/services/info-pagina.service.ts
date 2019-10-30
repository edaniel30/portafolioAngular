import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

    constructor( private http: HttpClient) {
      this.cargarInfo();
      this.cargarEquipo();
  }

  // tslint:disable-next-line: align
  private cargarInfo() {
    this.http.get('assets/data/data-pages.json')
          .subscribe( (resp: InfoPagina) => {

              this.cargada = true;
              this.info = resp;
          });
  }

  private cargarEquipo() {
    this.http.get('https://angular-pruebas-99ff2.firebaseio.com/equipo.json')
    // tslint:disable-next-line: align
    .subscribe((resp: any[]) => {
        this.equipo = resp;
        console.log(resp);

      });
    }
}
