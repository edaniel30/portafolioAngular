import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tslint:disable-next-line: no-shadowed-variable
  constructor( public InfoPaginaService: InfoPaginaService) {

  }
}
