import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';
import { MyRecipiesComponent } from './pages/my-recipies/my-recipies.component';
import { AddRecipeComponent } from './pages/add-recipe/add-recipe.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'recipe_details/:id',
        component: RecipeDetailsComponent
    },
    {
        path:"my-recipies",
        component:MyRecipiesComponent,
        canActivate: [authGuard]
    },
    {
        path:'create-recipe',
        component: AddRecipeComponent
    }
];
