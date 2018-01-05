import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[] = [];
  noResults:string = "";
  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private router:Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.noResults = "";
      if(params['nombre']){
        this.heroes = this._heroesService.buscarHeroe(params['nombre']);
        if(this.heroes.length==0){
          this.noResults = "No se han encontrado resultados";
        }
      }else{
        this.heroes = this._heroesService.getHeroes();
      }
    });
  }

  verHeroe (idx:number){
    this.router.navigate(['/heroe',idx]);
  }

}
