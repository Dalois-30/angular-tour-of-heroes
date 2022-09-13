import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  Heroes = HEROES;
  constructor() { }

  ngOnInit(): void {
  }
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero);
    
  }

}
