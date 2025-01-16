import { Component, inject } from '@angular/core';
import { RecipiesService } from '../../services/recipies.service';
import { Recipies } from '../../models/datamodels';

@Component({
  selector: 'app-my-recipies',
  standalone: true,
  imports: [],
  templateUrl: './my-recipies.component.html',
  styleUrl: './my-recipies.component.css'
})
export class MyRecipiesComponent {
  recipeService = inject(RecipiesService)
  myRecipes?: Recipies[];

  ngOnInit(): void {
    this.recipeService.getMyRecipes().subscribe((data) => {
      this.myRecipes = data;
    })
  }

  deleteRecipe(id: number) {
    const confirmed = confirm("are you sure you want to delete this recipe? ");
    if(confirmed){
      this.recipeService.deleteRecipe(id).subscribe((data) => {
        this.recipeService.getMyRecipes().subscribe((data) => {
          this.myRecipes = data;
        });
      })
    }
  }

  editRecipe(id: number) {
    
  }

  createRecipe()
  {
    
  }
}
