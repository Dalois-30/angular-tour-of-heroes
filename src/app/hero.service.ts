import { Injectable } from '@angular/core';
import { HEROES } from 'src/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(){
    return HEROES;
  }
}
