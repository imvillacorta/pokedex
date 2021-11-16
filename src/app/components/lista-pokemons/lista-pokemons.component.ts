import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-lista-pokemons',
  templateUrl: './lista-pokemons.component.html',
  styleUrls: ['./lista-pokemons.component.scss']
})
export class ListaPokemonsComponent implements OnInit {

  pokemon: any;
  infoPokemon: any;
  buscaVazia: boolean = true;

  constructor(
    private pokedexService: PokedexService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarPokemons();
  }

  listarPokemons() {
    this.pokedexService
      .obterTodosPokemon()
      .subscribe(resp => {
        this.pokemon = resp.results;
        this.infoPokemon = this.pokemon;
      });
  }

  pokemonFiltrado(value: string) {
    const filter = this.pokemon.filter((resp: any) => {
      return !resp.name.indexOf(value.toLowerCase());
    });

    this.infoPokemon = filter;

    if (this.infoPokemon.length > 0) {
      this.buscaVazia = true;
    }
    else {
      this.buscaVazia = false;
    }
  }

  detalhes(id: any) {
    this.router.navigate([
      `/detalhes/${id}`,
    ]);
  }
}
