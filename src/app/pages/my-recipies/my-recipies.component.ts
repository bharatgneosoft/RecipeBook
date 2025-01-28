import { Component, inject } from '@angular/core';
import { RecipiesService } from '../../services/recipies.service';
import { Recipies } from '../../models/datamodels';
import { RouterLink } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MouseoverDirective } from '../../mouseover.directive';


@Component({
  selector: 'app-my-recipies',
  standalone: true,
  imports: [RouterLink, NgxDatatableModule, MouseoverDirective],
  templateUrl: './my-recipies.component.html',
  styleUrl: './my-recipies.component.css'
})
export class MyRecipiesComponent {
  recipeService = inject(RecipiesService)
  myRecipes?: Recipies[];

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];

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

}
