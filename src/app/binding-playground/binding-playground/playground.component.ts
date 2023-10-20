import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class BindingPlaygroundComponent {

  url = 'http://loiane.training'
  cursoAngular = true;
  urlImagem = '';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() {}
}
