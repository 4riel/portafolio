import { Component, Input } from "@angular/core";
import { animate, style, transition, trigger } from "@angular/animations";
import { Pokemon } from "src/app/models/pokemon";
import {
  PokemonSimpleInfo,
  PokemonService,
} from "src/app/services/pokemon/pokemon.service";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.less"],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
    ])
  ],
})
export class PokemonDetailComponent {
  @Input() pokemon: Pokemon | null;
  @Input() pokemonSimpleInfo: PokemonSimpleInfo | null;
  active = 1;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    if (this.pokemon == null && this.pokemonSimpleInfo) {
      this.pokemonService
        .searchPokemonByName(this.pokemonSimpleInfo.name)
        .subscribe((res) => {
          this.pokemon = res;
        });
    }
  }
}
