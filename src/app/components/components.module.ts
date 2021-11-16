import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPokemonsComponent } from './lista-pokemons/lista-pokemons.component';
import { BuscaPokemonComponent } from './busca-pokemon/busca-pokemon.component';



@NgModule({
  declarations: [
    ListaPokemonsComponent,
    BuscaPokemonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaPokemonsComponent,
    BuscaPokemonComponent
  ]
})
export class ComponentsModule { }
