import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { delay, tap } from "rxjs/operators";
import { Pokemon } from "../../models/pokemon";
import { SessionCacheService } from "../cache/session-cache.service";
import { POKEMON_MOCKUP_DATA } from "./pokemon-mockup-data";

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  private readonly API_URL = "https://pokeapi.co/api/v2/pokemon";

  constructor(
    private http: HttpClient,
    private cacheService: SessionCacheService // Should be interface
  ) {}

  searchPokemonByName(name: string): Observable<Pokemon> {
    const cachedResult = this.cacheService.getItem<Pokemon>(name);

    if (cachedResult) {
      return of(cachedResult);
    }

    // sorry :D
    if (name.toLowerCase() == 'ariel') { 
      return of(POKEMON_MOCKUP_DATA)
    }

    return this.http.get<Pokemon>(`${this.API_URL}/${name}`).pipe(
      tap((pokemon) => {
        this.cacheService.setItem(name, pokemon);
      })
    );
  }

  getPokemonList(limit = 20, offset = 0): Observable<PokemonListResult> {
    return this.http
      .get<PokemonListResult>(`${this.API_URL}?limit=${limit}&offset=${offset}`)
      .pipe(
        // sorry for this
        tap((result) => {
          if (offset === 0) {
            const arielMockup: PokemonSimpleInfo = {
              name: 'Ariel',
              url: ''
            };
            result.results = [arielMockup, ...result.results];
            result.results.pop();
            result.count += 1;
          }
        })
      );
  }
}

export class PokemonListResult {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonSimpleInfo[];
}

export class PokemonSimpleInfo {
  name: string;
  url: string;
}
