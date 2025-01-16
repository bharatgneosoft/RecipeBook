import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Recipies } from '../models/datamodels';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipiesService {
  http = inject(HttpClient);
  apiUrl = 'http://localhost:8000/api/';
  constructor() { }

  getRecipies():Observable<Recipies[]>{
    return this.http.get<Recipies[]>(this.apiUrl+'recipies');
  }

  getRecipie(id:number):Observable<Recipies>{
    return this.http.get<Recipies>(this.apiUrl+'recipie/'+id);
  }

  getMyRecipes():Observable<Recipies[]>{
    return this.http.get<Recipies[]>(this.apiUrl+'my_recipes');
  }

  deleteRecipe(id:number):Observable<any>{
    return this.http.get(this.apiUrl+'delete_recipe/'+id);
  }

  addRecipe(recipe:any):Observable<any>{
    return this.http.post(this.apiUrl+'add_recipe',recipe);
  }
}
