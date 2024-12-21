import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { SessaoService } from '../auth/sessao.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavbarComponent
],
})
export class LoginComponent {
  formGroup: FormGroup = new FormGroup({
    usuario: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.min(2)],
    }),

    senha: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.min(6)],
    }),
  });

  constructor(private sessaoService: SessaoService, private router: Router) {}

  login() {
    if (this.formGroup.invalid) {
      return;
    }

    const { usuario, senha } = this.formGroup.value;

    this.simularChamadaAPI(usuario, senha)?.subscribe({
      next: (resposta) => {
        this.sessaoService.salvarSessao(resposta);
        this.router.navigate(['/lista']);
      },
      error: (erro) => {
        alert(erro);
        this.formGroup.reset();
      },
    });
  }

  simularChamadaAPI(usuario: string, senha: string) {
    return usuario === 'professor' && senha === '12345'
      ? // Usuário válido
        of({
          accessToken: 'Password',
          nome: 'Professor',
        })
      : // Usuário inválido
        throwError(() => {
          const error: any = new Error(`Usuário ou senha inválido`);
          error.timestamp = Date.now();
          return error;
        });
  }
}
