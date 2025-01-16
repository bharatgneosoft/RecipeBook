import { Component, inject } from '@angular/core';
import { RecipiesService } from '../../services/recipies.service';
import { Recipies } from '../../models/datamodels';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  recipiesService = inject(RecipiesService);
  recipies?: Recipies[];

  ngOnInit(): void {
    this.recipiesService.getRecipies().subscribe((data) => {
      this.recipies = data;
      console.log(this.recipies);
    });
  }
}
