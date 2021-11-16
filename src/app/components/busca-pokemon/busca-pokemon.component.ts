import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-busca-pokemon',
  templateUrl: './busca-pokemon.component.html',
  styleUrls: ['./busca-pokemon.component.scss']
})
export class BuscaPokemonComponent implements OnInit {

  @Output() public pokemon: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  buscarPokemon(value: string) {
    this.pokemon.emit(value);
  }

}
