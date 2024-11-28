import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../services/aluno.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-alunos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent implements OnInit {
  // Lista de alunos que vai aparecer na tela
  alunos: any[] = [];
  // Data que aparece no topo da página
  dataHoje: string;

  constructor(private alunoService: AlunoService) {
    this.dataHoje = new Date().toLocaleDateString('pt-BR');
  }

  // Quando a página carrega
  ngOnInit() {
    this.alunos = this.alunoService.getAlunos();
  }

  // Quando clica no botão de digital
  marcarPresente(id: number) {
    if (this.alunoService.marcarPresenca(id)) {
      alert('Digital reconhecida! Presença registrada hoje');
    } else {
      alert('Aluno já registrou presença hoje!');
    }
  }

  // Conta presenças do mês
  getPresencasMes(id: number): number {
    return this.alunoService.contarPresencasMes(id);
  }

  // Remove aluno da lista
  excluirAluno(id: number) {
    if (confirm('Quer mesmo excluir este aluno?')) {
      if (this.alunoService.excluirAluno(id)) {
        alert('Aluno excluído!');
      }
    }
  }
}