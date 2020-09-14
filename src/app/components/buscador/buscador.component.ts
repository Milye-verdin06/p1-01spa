import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  termino: string;

  constructor(
    private activatedRouter: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      this.termino = params['term'];
      this.heroes = this.heroesService.buscarHeroes(params['term']);
    });
  }
  verHeroe(i: number) {
    this.router.navigate(['/heroe', i]);
  }
}
