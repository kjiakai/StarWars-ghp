import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: string[];
  categoriesl: string[];

  constructor() { }

  ngOnInit() {
    this.categories = ['Characters', 'Films', 'Species', 'Starships', 'Vehicles', 'Planets'];
    this.categoriesl = ['characters', 'films', 'species', 'starships', 'vehicles', 'planets'];
  }


}
