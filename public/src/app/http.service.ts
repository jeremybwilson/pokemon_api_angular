import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    constructor(private _http: HttpClient) {
        this.getPokemon();
    }
    getPokemon(){
        const pokemonApiUrl = 'https://pokeapi.co/api/v2/pokemon/1/';
        let bulbasaur = this._http.get(pokemonApiUrl);
        return bulbasaur;
    }
}