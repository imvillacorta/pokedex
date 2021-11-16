import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  idPokemon: any = '';
  pokemon: any = '';

  constructor(
    private route: ActivatedRoute,
    private pokedexService: PokedexService
  ) { }

  ngOnInit(): void {
    this.obterId();
    this.obterPokemon();
  }

  obterId() {
    this.route
      .paramMap
      .subscribe((params) => {
        this.idPokemon = params.get('id');
      });
  }

  obterPokemon() {
    this.pokedexService
      .obterPokemonPorId(this.idPokemon)
      .subscribe(resp => {
        this.pokemon = resp
      });
  }

}
