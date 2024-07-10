import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'skills',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h3>Навички:</h3>
  <ul>
    <li *ngFor="let skill of skills">{{ skill }}</li>
  </ul>
  `,
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    "HTML", "CSS", "SCSS", "BEM", "JS", "C#", "C++", "QTCreator", "WPF"
  ]
}
