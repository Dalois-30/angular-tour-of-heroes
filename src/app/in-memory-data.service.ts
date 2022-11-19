import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const heroes = [
      {
          id: 12, 
          name: 'Dalois'
      },
      {
          id: 13,
          name: 'Claude'
      },
      {
          id: 14,
          name: 'Nguenang'
      },
      {
          id: 15,
          name: 'Tapi'
      },
      {
          id: 16,
          name: 'Manon'
      }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
