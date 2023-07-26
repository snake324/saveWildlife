import { Component} from '@angular/core';

@Component({
  selector: 'app-list-species',
  templateUrl: './list-species.component.html',
  styleUrls: ['./list-species.component.scss']
})
export class ListSpeciesComponent {
  constructor() { }
  filterList = '';
  list = [
    {
      "id": 1,
      "name": "Lion",
      "country": "African"
    },
    {
      "id": 2,
      "name": "Puma",
      "country": "American"
    },
    {
      "id": 3,
      "name": "Iberian Lynx",
      "country": "European"
    },
    {
      "id": 4,
      "name": "Gepard",
      "country": "African"
    },
    {
      "id": 5,
      "name": "Tiger Leopard",
      "country": "American"
    }
  ];
  ngOnInit() {
    this.filterAnimalsByCountry();
  }

  filterAnimalsByCountry() {
    this.list = this.list.filter(animal => animal.country === 'African');
  }
}

