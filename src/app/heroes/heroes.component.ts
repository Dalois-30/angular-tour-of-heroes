import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  Heroes: Hero[] = []
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
  }
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero);
    
  }

  getHeroes(): void {
    this.Heroes = this.heroService.getHeroes();
  }

}
