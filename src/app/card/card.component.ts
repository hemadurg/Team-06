import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(private routes: Router) {

  }
  ngOnInit() {

  }
  Images = [
    {
      src: '../assets/Imeges/i1.jpeg',
      alt: 'item1',
      title: 'Borra caves',
      desc: 'Located on the east coast of India, the Borra Caves are situated in the Ananthagiri hills of the Araku Valley in Visakhapatnam district. ',
      button: 'Readmore'
    },
    {
      src: '../assets/Imeges/i3.webp',
      alt: 'item2',
      title: 'Kailasagiri',
      desc: 'Located in the scenic locales of Vizag, Kailash Giri is a beautiful hilltop park perched at a height of 360 ft. Sprawling over 100 acres of lush green land area.',
      button: 'Readmore'
    },
    {
      src: '../assets/Imeges/i3.jpeg',
      alt: 'Item3',
      title: 'RUshikonda beach',
      desc: 'The Rushikonda Beach is a stunning shore located on the coast of the Bay of Bengal in Vishakhapatnam, in the Indian state of Andhra Pradesh',
      button: 'Readmore'
    }
  ]
  Onclick() {
    this.routes.navigateByUrl('')
  }
}
