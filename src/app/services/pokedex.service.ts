import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from "rxjs/operators";

import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PokedexService extends BaseService {

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  obterTodosPokemon() {
    return this.http.get<any>(
      this.urlApi + 'pokemon/?offset=0&limit=300'
    )
      .pipe(
        tap(res => {
          res.results.map((infosPokemon: any) => {
            this.infoPokemons(infosPokemon.url).subscribe(
              res => infosPokemon.status = res
            );

          })
        })
      )

  }

  infoPokemons(url: any) {
    return this.http.get<any>(url);
  }

  obterPokemonPorId(id: string) {
    return this.http.get<any>(
      this.urlApi + 'pokemon/' + id
    );
  }

}
