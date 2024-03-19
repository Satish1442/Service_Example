import { Injectable } from '@angular/core';
import { IHero } from './ihero';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService{

  //heroSubject:any = new Subject();
  heroes:IHero[]=[];
  temphero:any ={Id:0,Name:"",NoOfMovies:0,NoOfAffairs:0};

  constructor() { 
    this.heroes.push({ Id:1,Name:"chiru",NoOfMovies:155,NoOfAffairs:0});
    this.heroes.push({ Id:2,Name:"sanjay",NoOfMovies:55,NoOfAffairs:150});
  }

  getHeroes()
  {
    return this.heroes;
  }

  addHero(hero:IHero)
  {
    this.heroes.push(hero);
  }

  findHero(Id:number)
  {
    return this.heroes.find(h=>h.Id==Id);
  }

  updatehero(hero:any){
    this.temphero = this.heroes.find(h=>h.Id==hero.Id);
    this.temphero.Name=hero.Name;
    this.temphero.NoOfMovies=hero.NoOfMovies;
    this.temphero.NoOfAffairs=hero.NoOfAffairs;
  }

  deletehero(id:any){
    this.temphero = this.heroes.findIndex((std)=>std.Id==id);
    this.heroes.splice(this.temphero,1);
  }
}
