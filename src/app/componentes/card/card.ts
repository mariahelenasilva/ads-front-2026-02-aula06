// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-card',
//   styleUrl: './card.css',
//   templateUrl: './card.html',
// })
// export class Card {}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class CardComponent {

  @Input() imagePathCard: string = '';
  @Input() tituloCard: string = '';
  @Input() textoCorpo: string = '';
  @Input() textoBotao: string = '';

}