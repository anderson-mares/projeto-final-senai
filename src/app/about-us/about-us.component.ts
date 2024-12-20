import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {
  team = [
    {
      name: 'Dr. João Silva',
      description:
        'Profissional altamente capacitado em Direito Empresarial, com ampla experiência no suporte jurídico a empresas de diferentes portes e segmentos.',
      image: '../../assets/joao.jpg',
    },
    {
      name: 'Dra. Maria Oliveira',
      description:
        'Advogada com sólida formação e vasta experiência em Direito Civil, especializado em resolução de conflitos patrimoniais, relações contratuais e responsabilidade civil.',
      image: 'assets/maria.jpg',
    },
    {
      name: 'Dr. Carlos Souza',
      description:
        'Advogado renomado no campo do Direito Penal, com ampla experiência na defesa de clientes em casos criminais de alta complexidade. Possui domínio sobre a legislação penal e processual penal.',
      image: 'assets/carlos.jpg',
    },
  ];
}
