import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // Dados mockados
  alunos = 48;
  novosEsteMes = 2;
  presentesHoje = 12;
  proximasGraduacoes = 5;
  eventosProximos = 2;
  distribuicao = [
    { faixa: 'White', count: 20, color: '#eee' },
    { faixa: 'Blue', count: 15, color: 'blue' },
    { faixa: 'Purple', count: 8, color: 'purple' },
    { faixa: 'Brown', count: 4, color: 'brown' },
    { faixa: 'Black', count: 1, color: 'black' },
  ];
  eventosRecentes = [
    { titulo: 'Seminário de Guarda', data: '14/01/2024', inscritos: 12 },
    { titulo: 'Campeonato Interno', data: '21/01/2024', inscritos: 25 },
  ];
  presencaMedia = 78;
}
