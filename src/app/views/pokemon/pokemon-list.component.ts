import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject, from, of } from "rxjs";
import {
  concatMap,
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  map,
  takeUntil,
} from "rxjs/operators";
import { Pokemon } from "src/app/models/pokemon";
import {
  PokemonService,
  PokemonSimpleInfo,
} from "src/app/services/pokemon/pokemon.service";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.less"],
})
export class PokemonListComponent implements OnInit, OnDestroy {
  pokeSearch: Pokemon | null = null;
  pokemons: PokemonSimpleInfo[] = [];
  offset = 0;
  limit = 5;
  private searchTerm = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadMore();
    this.setupSearch();
  }

  private setupSearch() {
    this.searchTerm
      .pipe(debounceTime(500), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((query) => {
        this.pokeSearch = null;
        if (query) {
          this.pokemonService.searchPokemonByName(query).subscribe((poke) => {
            if (poke) {
              this.pokeSearch = poke;
            }
          });
        }
      });
  }

  onSearch(query: string) {
    this.searchTerm.next(query);
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  loadMore(): void {
    this.pokemonService
      .getPokemonList(this.limit, this.offset)
      .pipe(
        map((res) => {
          this.offset += res.results.length;
          return res.results;
        }),
        concatMap((results) => from(results)),
        filter((newPokemon: PokemonSimpleInfo) => {
          return !this.pokemons.some(existingPokemon => existingPokemon.url === newPokemon.url);
        }),
        concatMap((pokemon) => of(pokemon).pipe(delay(200))),
        takeUntil(this.destroy$)
      )
      .subscribe((pokemon) => {
        this.pokemons.push(pokemon);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
