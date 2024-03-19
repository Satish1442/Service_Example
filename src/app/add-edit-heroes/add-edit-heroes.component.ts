import { Component, inject } from '@angular/core';
import { HeroServiceService } from '../hero-service.service';
import { FormsModule } from '@angular/forms';
import { IHero } from '../ihero';
import { HeroesComponent } from '../heroes/heroes.component';
@Component({
  selector: 'app-add-edit-heroes',
  standalone: true,
  imports: [FormsModule,HeroesComponent],
  templateUrl: './add-edit-heroes.component.html',
  styleUrl: './add-edit-heroes.component.css'
})
export class AddEditHeroesComponent {
  

  newHero:IHero={Id:0,Name:"",NoOfMovies:0,NoOfAffairs:0};

  heroService:HeroServiceService=inject(HeroServiceService);

  

  addHero()
  {
    this.heroService.addHero(this.newHero);
    this.newHero={Id:0,Name:"",NoOfMovies:0,NoOfAffairs:0};
  }
    
  editHero($event:any)
  {
    this.newHero={...$event};
  }

  //this.heroService.heroSubject.subscribe((val:any)=>{this.editHero(val)})

  updatehero(hero:any)
  {
    this.heroService.updatehero(hero);
  }
}
