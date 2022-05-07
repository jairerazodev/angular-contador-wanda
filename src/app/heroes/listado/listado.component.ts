import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  illuminaties: string[] = [
    'Black Bolt',
    'Reed Richards',
    'Capitana America',
    'Capitana Marvel',
    'Charles Xavier'
  ];

  illuminatiBorrado: string = '';

  borrarIlluminati() {
    this.illuminatiBorrado = this.illuminaties.shift() || '';
  }

}