import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { DinosaurComponent } from './views/components/dinosaur/dinosaur.component';
import { NavComponent } from './views/components/nav/nav.component';
import { ExperienceComponent } from './views/experience/experience.component';
import { SkillsComponent } from './views/skills/skills.component';
import { FooterComponent } from './views/components/footer/footer.component';
import { PokemonListComponent } from './views/pokemon/pokemon-list.component';
import { PokemonDetailComponent } from './views/pokemon/pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DinosaurComponent,
    NavComponent,
    ExperienceComponent,
    SkillsComponent,
    FooterComponent,
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    InfiniteScrollModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})

export class AppModule {}