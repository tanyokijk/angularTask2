import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillsComponent } from '../skills/skills.component';
import { LinksComponent } from '../links/links.component';
import { PhotoComponent } from '../photo/photo.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [
    CommonModule,
    ExperienceComponent,
    SkillsComponent,
    LinksComponent,
    PhotoComponent,
    PhotoComponent,
  ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
})
export class SummaryComponent {}
