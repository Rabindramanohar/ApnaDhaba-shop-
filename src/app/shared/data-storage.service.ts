import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators'
import { AuthService } from '../auth/auth.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient,
                private recipeService: RecipeService,
                private authService: AuthService) {}

    storeRecipe() {
        const recipes = this.recipeService.getRecipes();
        this.http
        .put('https://ng-recipebook-585b0.firebaseio.com/recipes.json',
        recipes).subscribe(response => {
            console.log(response);
        })
    }

    fetchRecipe() {
        
            return this.http.get<Recipe[]>('https://ng-recipebook-585b0.firebaseio.com/recipes.json')
            .pipe( 
                map(recipes => {
                return recipes.map(recipe =>{
                    return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
                })
            }),
        tap(recipes => {
            return this.recipeService.setRecipes(recipes)
        }));
    }
}