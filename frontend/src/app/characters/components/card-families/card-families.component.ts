import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-families',
  templateUrl: './card-families.component.html',
  styleUrls: ['./card-families.component.scss']
})
export class CardFamiliesComponent {
  images = [
    { url: '../../../../assets/images/tiger-4427000_1280 1 2.png', name: 'FÉLIDOS', route: ''},
    { url: '../../../../assets/images/wolf-8089783_1280 1 2.png', name: 'CÁNIDOS', route: '' },
    { url: '../../../../assets/images/gecko-2299365_1280 1 2.png', name: 'REPTILES', route: '' },
    { url: '../../../../assets/images/snow-17854_1280 1 2.png', name: 'MUSTELIDAE', route: '' },
    { url: '../../../../assets/images/rabbit-1903016_1280 1 2.png', name: 'LEPORIDAE', route: '' }
  ];

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }

}