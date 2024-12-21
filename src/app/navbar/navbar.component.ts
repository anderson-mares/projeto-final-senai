import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SessaoService } from '../auth/sessao.service';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  sessao$: Observable<any>;

  constructor(private sessaoService: SessaoService,
              private router: Router
  ) {
    this.sessao$ = this.sessaoService.getSessao();
  }

  logout() {
    this.sessaoService.logout();
    this.router.navigate(['/home'])
  }
}
