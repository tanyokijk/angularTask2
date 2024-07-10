import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'links',
  standalone: true,
  imports: [CommonModule],
  template: `<h3>Мої посилання</h3>
  <ul>
    <li *ngFor="let link of links"><a href="{{link}}" target="_blank">GitHub</a></li>
  </ul>
  `,
  styleUrl: './links.component.css'
})
export class LinksComponent {
links = [
  "https://github.com/mortein43?tab=repositories"
]
}
