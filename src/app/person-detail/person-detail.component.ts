import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../interface';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  title = 'StarWars';
  @Input() persondetail: Person[];

  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
    this.apiService.getPeople().subscribe(data => this.persondetail = data);
  }

}
