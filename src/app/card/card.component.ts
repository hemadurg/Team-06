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
  famous = [
    {
      src: '../assets/Imeges/b1.jpg',
      alt: 'item1',
      title: 'Borra caves',
      desc: 'Located on the east coast of India, the Borra Caves are situated in the Ananthagiri hills of the Araku Valley in Visakhapatnam district. ',
      button: 'Readmore'
    },
    {
      src: '../assets/Imeges/k1.jpeg',
      alt: 'item2',
      title: 'Kailasagiri',
      desc: 'Located in the scenic locales of Vizag, Kailash Giri is a beautiful hilltop park perched at a height of 360 ft. Sprawling over 100 acres of lush green land area.',
      button: 'Readmore'
    },
    {
      src: '../assets/Imeges/r1.jpg',
      alt: 'Item3',
      title: 'Rushikonda beach',
      desc: 'The Rushikonda Beach is a stunning shore located on the coast of the Bay of Bengal, in the Indian state of Andhra Pradesh',
      button: 'Readmore'
    },
    {
      src: '../assets/Imeges/s1.jpeg',
      alt: 'Item4',
      title: 'Submarine Museum',
      desc: 'Submarine Museum is located in the south-eastern state of India. The museum is inside an actual submarine,which was Indias 5th submarine. ',
      button: 'Readmore' 
    }
  ]
    restaurants = [
    {
      src: '../assets/Imeges/re1.jpeg',
      alt: 'item1',
      title: 'Radisson Blu Resort',
      desc: 'Set close to Visakhapatnam Airport and Kailasagiri train station, Radisson Blu Resort boasts luxury accommodations. The property houses sophisticated ocean-view rooms, a posh ambiance, hot tubs, and beauty services.',
      button: 'Viewdetails'
    },
    {
      src: '../assets/Imeges/re2.jpeg',
      alt: 'item2',
      title: 'Sri Raghavendra Inn',
      desc: 'Situated conveniently close to Visakhapatnam Airport and Railway Station, Sri Raghavendra Inn is an affordable accommodation. The hotel features well-maintained rooms, a homely ambiance, and helpful staff.',
      button: 'Viewdetails'
    },
    {
      src: '../assets/Imeges/re3.jpeg',
      alt: 'Item3',
      title: 'Treebo Trend Seaesta',
      desc: 'Featuring 3-star accommodation, Treebo Trend Seaesta RK Beach is set in Visakhapatnam, 2.2 km from Ramakrishna Beach and 8.1 km from Indira Gandhi Zoological Park. This 3-star hotel offers room service, a 24-hour front desk and free WiFi.',
      button: 'Viewdetails'
    },
    {
      src: '../assets/Imeges/re4.jpeg',
      alt: 'Item4',
      title: 'The Gateway Hotel',
      desc: 'Spices and History. Beaches and Business. Calicut has it all. The Gateway Hotel keeps you close to the city centre while providing a smart retreat. Step out into this historic city and when you were ready, back to modern comfort tucked away in lush greenery.',
      button: 'Viewdetails' 
    }
  ]
  Onclick() {
    this.routes.navigateByUrl('')
  }
}
