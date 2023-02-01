import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { envoironment } from 'src/environments/environment';
import { Hero } from '../models/hero.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = `${envoironment.baseUrl}/heroes`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  // GET /heroes
  getAll(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(tap((heroes) => this.log(`fetched ${heroes.length} hero(es)`)));
  }

  // GET /heroes/id
  getOne(id: number): Observable<Hero> {
    return this.http
      .get<Hero>(this.getUrl(id))
      .pipe(tap((hero) => this.log(`fetched ${this.descAttributes(hero)}`)));
  }

  //POST /heroes
  create(hero: Hero): Observable<Hero> {
    return this.http
      .post<Hero>(this.heroesUrl, hero)
      .pipe(tap((hero) => this.log(`created ${this.descAttributes(hero)}`)));
  }

  //PUT /heroes/id
  update(hero: Hero): Observable<Hero> {
    return this.http
      .put<Hero>(this.getUrl(hero.id), hero)
      .pipe(tap((hero) => this.log(`updated ${this.descAttributes(hero)}`)));
  }

  //DELETE /heroes/id
  delete(hero: Hero): Observable<unknown> {
    return this.http
      .delete<unknown>(this.getUrl(hero.id))
      .pipe(tap(() => this.log(`deleted ${this.descAttributes(hero)}`)));
  }

  private descAttributes(hero: Hero): string {
    return `Hero ID=${hero.id} and Name=${hero.name}`;
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }

  private getUrl(id: number): string {
    return `${this.heroesUrl}/${id}`;
  }
}
