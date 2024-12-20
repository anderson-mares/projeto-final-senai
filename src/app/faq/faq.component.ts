import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  standalone: true, // Declara que o componente é standalone
  imports: [CommonModule], // Adicione aqui outros módulos que o componente precisar
})
export class FaqComponent implements AfterViewInit {
  ngAfterViewInit() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
      const question = item.querySelector('.faq-question') as HTMLButtonElement;
      const answer = item.querySelector('.faq-answer') as HTMLDivElement;

      question.addEventListener('click', () => {
        const isVisible = answer.style.display === 'block';
        answer.style.display = isVisible ? 'none' : 'block';
      });
    });
  }
}
