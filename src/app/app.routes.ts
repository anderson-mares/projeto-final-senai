import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { ContatoComponent } from './contato/contato.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { ListaComponent } from './lista/lista.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'contato', component: ContatoComponent, },
  { path: 'sobre-nos', component: AboutUsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'lista', component: ListaComponent, canActivate: [AuthGuard] },

  // Rota raiz
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
