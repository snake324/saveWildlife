import { Component } from '@angular/core';

@Component({
  selector: 'app-card-families',
  templateUrl: './card-families.component.html',
  styleUrls: ['./card-families.component.scss']
})
export class CardFamiliesComponent {
  images = [
    { url: '../../../../assets/images/tiger-4427000_1280 1 2.png', name: 'FÉLIDOS' },
    { url: '../../../../assets/images/wolf-8089783_1280 1 2.png', name: 'CÁNIDOS' },
    { url: '../../../../assets/images/gecko-2299365_1280 1 2.png', name: 'REPTILES' },
    { url: '../../../../assets/images/snow-17854_1280 1 2.png', name: 'MUSTELIDAE' },
    { url: '../../../../assets/images/rabbit-1903016_1280 1 2.png', name: 'LEPORIDAE' }
  ];
}
