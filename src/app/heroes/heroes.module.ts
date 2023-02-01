import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from '../heroes/components/hero-detail/hero-detail.component';
import { HeroesComponent } from '../heroes/components/heroes/heroes.component';
import { MaterialModule } from '../material/material.module';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeroesComponent, HeroDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
})
export class HeroesModule {}
