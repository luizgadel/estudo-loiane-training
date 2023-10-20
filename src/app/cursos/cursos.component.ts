import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  portalName: string;
  cursos: string[] = ['Java', 'Ext JS', 'Angular'];

  constructor() {
    this.portalName = "http://loiane.training/"
  }
}
