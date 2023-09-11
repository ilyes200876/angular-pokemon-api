import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonInterface } from '../pokemon-interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{

  pokemons: PokemonInterface[]|undefined;

  constructor(private pokemonService: PokemonService){}

  ngOnInit(){

    this.pokemonService.fetchAllPokemon().subscribe(pokemonTronslate => [
      this.pokemons = pokemonTronslate
    ]);
  }

}
