import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'experience',
  standalone: true,
  imports: [CommonModule],
  template: `<h3>Досвід роботи:</h3>
    <ul>
        <li *ngFor="let exp of experience">{{ exp }}</li>
    </ul>`,
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experience = [
    'З січня 2008 року по листопад 2013 року працював на посаді оператора ЕОТ у Інституті післядипломної педагогічної освіти в Чернівецькій області.',
    'З листопада 2013 року працював на посаді провідного фахівця з питань функціонування \"Інформаційної системи управління освітою\" в Чернівецькій області.'
];
}
