import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(  private router: Router,
                public aservicio: InfoPaginaService) { }

  ngOnInit() {
  }

  // tslint:disable-next-line: ban-types
  buscarProducto(termino: String) {

    if (termino.length < 1 ) {
      return;
    }
    this.router.navigate(['/search', termino]);
    // console.log(termino);
  }
}
