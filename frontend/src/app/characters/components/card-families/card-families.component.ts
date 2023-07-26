import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Family } from '../../models/family.model';

@Component({
  selector: 'app-card-families',
  templateUrl: './card-families.component.html',
  styleUrls: ['./card-families.component.scss']
})
export class CardFamiliesComponent implements OnInit {
  families: Family[] = [];

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    this.getFamilies();
  }

  getFamilies() {
    this.apiService.getAll().subscribe(
      (families: Family[]) => {
        this.families = families;
      },
      (error) => {
        console.log('Error al obtener las familias:', error);
      }
    );
  }
 
}
