import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from '../heroes/components/hero-detail/hero-detail.component';
import { HeroesComponent } from '../heroes/components/heroes/heroes.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  declarations: [HeroesComponent, HeroDetailComponent],
  imports: [CommonModule, MaterialModule, FormsModule, HeroesRoutingModule],
})
export class HeroesModule {}