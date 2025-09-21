// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'alunos',
    loadComponent: () =>
      import('./pages/alunos/alunos.component').then((m) => m.AlunosComponent),
  },
  {
    path: 'presenca',
    loadComponent: () =>
      import('./pages/presenca/presenca.component').then((m) => m.PresencaComponent),
  },
  {
    path: 'eventos',
    loadComponent: () =>
      import('./pages/eventos/eventos.component').then((m) => m.EventosComponent),
  },
  {
    path: 'posts',
    loadComponent: () =>
      import('./pages/posts/posts.component').then((m) => m.PostsComponent),
  },
  {
    path: 'notificacoes',
    loadComponent: () =>
      import('./pages/notificacoes/notificacoes.component').then(
        (m) => m.NotificacoesComponent
      ),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
