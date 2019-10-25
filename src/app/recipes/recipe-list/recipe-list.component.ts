import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe('A Test Recipe', 'This is for the test', 'https://minimalistbaker.com/wp-content/uploads/2019/09/AMAZING-1-Pan-Shredded-Mexican-Chicken-30-minutes-9-ingredients-Great-for-burritos-tacos-enchiladas-and-more-glutenfree-chicken-mexican-grainfree-recipe-minimalistbaker-16-600x900.jpg'),
    new Recipe('A Test Recipe', 'This is for the test', 'https://minimalistbaker.com/wp-content/uploads/2019/09/AMAZING-1-Pan-Shredded-Mexican-Chicken-30-minutes-9-ingredients-Great-for-burritos-tacos-enchiladas-and-more-glutenfree-chicken-mexican-grainfree-recipe-minimalistbaker-16-600x900.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
