import { Component, inject } from '@angular/core';
import { Recipies } from '../../models/datamodels';
import { RecipiesService } from '../../services/recipies.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [UpperCasePipe, DatePipe],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
  recipe?: Recipies;

  recipeService = inject(RecipiesService);
  activeRoute = inject(ActivatedRoute);

  ngOnInit() {
    console.log(this.activeRoute.params.subscribe((val)=>{
      this.recipeService.getRecipie(val['id']).subscribe((data) =>{
        this.recipe = data;
        console.log(this.recipe);
      })
    }));
  }
}
