import { Component, OnInit } from '@angular/core';
import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    title = 'Pokemon API';
    imgBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1' + '.png';
    image = this.imgBaseUrl;
    pokemon = [];
    constructor (private _httpService : HttpService ) {
    };

    ngOnInit () {
        this.getPokemonFromService();
    };

    getPokemonFromService () {
        let observable = this._httpService.getPokemon();
        observable.subscribe ( data => {
            console.log("Got Bulbasaur!", data);
            // console.log(`Got our tasks! ${data}`);
            this.pokemon = data["data"];
        });
    };
}
