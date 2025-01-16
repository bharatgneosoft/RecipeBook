import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecipiesService } from '../../services/recipies.service';
import { EditorModule } from '@tinymce/tinymce-angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [ReactiveFormsModule, EditorModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {
  errorMessage = "";
  recipeService = inject(RecipiesService);
  router= inject(Router);
  newRecipeForm = new FormGroup({
    title: new FormControl('',[Validators.required, Validators.minLength(10)]),
    ingredients: new FormControl('',[Validators.required, Validators.minLength(10)]),
    steps: new FormControl('',[Validators.required, Validators.minLength(10)]),
    image: new FormControl()
  });

  onSubmit() {
    if (this.newRecipeForm.valid) {
      const formData = new FormData();
  
      // Append form values to FormData
      formData.append('title', this.newRecipeForm.get('title')?.value || '');
      formData.append('ingredients', this.newRecipeForm.get('ingredients')?.value || '');
      formData.append('steps', this.newRecipeForm.get('steps')?.value || '');
      if (this.newRecipeForm.get('image')?.value) {
        formData.append('image', this.newRecipeForm.get('image')?.value);
      }
  
      // Call the service with FormData
      this.recipeService.addRecipe(formData).subscribe({
        next: (data) => {
          this.errorMessage = '';
          this.newRecipeForm.reset();
          this.router.navigate(['/my-recipies']);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
        },
      });
    }
  }
  

  onFileChange($event: Event){
    this.newRecipeForm.patchValue({
      image: ($event.target as HTMLInputElement).files?.[0]
    })
  }
}
