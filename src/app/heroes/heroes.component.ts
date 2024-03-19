import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeroServiceService } from '../hero-service.service';
import { IHero } from '../ihero';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {

  heroes:IHero[]=[];

  @Output()
  OnEditHero:EventEmitter<IHero>=new EventEmitter();

  constructor(private heroService:HeroServiceService)
  {

  }

  ngOnInit(): void {
      this.heroes=this.heroService.getHeroes();
  }

  editHero(hero:IHero)
  {
    let foundHero=this.heroService.findHero(hero.Id);
    if(foundHero)
    {
      this.OnEditHero.emit(foundHero);
    }
  }

  deleteHero(hero:IHero){
    let foundHero=this.heroService.findHero(hero.Id);
    if(foundHero)
    {
      this.heroService.deletehero(hero.Id);
    }
  }

}
