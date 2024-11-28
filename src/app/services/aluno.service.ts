import { Injectable } from '@angular/core';

// Modelo básico de como é um aluno no sistema
interface Aluno {
  id: number;
  nome: string;
  turma: string;
  presencas: string[]; // Lista de datas presentes
  presenteHoje: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  // Lista de alunos exemplo
  private alunos: Aluno[] = [
    { 
      id: 1, 
      nome: 'João Silva', 
      turma: '9A', 
      presencas: [], 
      presenteHoje: false 
    },
    { 
      id: 2, 
      nome: 'Maria Santos', 
      turma: '9B', 
      presencas: [], 
      presenteHoje: false 
    }
  ];

  // Pega a data de hoje
  private pegarDataHoje(): string {
    const hoje = new Date();
    return hoje.toLocaleDateString('pt-BR');
  }

  // Pega lista de alunos
  getAlunos() {
    return this.alunos;
  }

  // Adiciona novo aluno
  adicionarAluno(aluno: { nome: string; turma: string }) {
    const novoAluno: Aluno = {
      nome: aluno.nome,
      turma: aluno.turma,
      id: this.alunos.length + 1,
      presencas: [],
      presenteHoje: false
    };
    this.alunos.push(novoAluno);
  }

  // Marca presença do aluno
  marcarPresenca(id: number) {
    const aluno = this.alunos.find(a => a.id === id);
    const dataHoje = this.pegarDataHoje();
    
    if (aluno && !aluno.presencas.includes(dataHoje)) {
      aluno.presencas.push(dataHoje);
      aluno.presenteHoje = true;
      return true;
    }
    return false;
  }

  // Conta presenças do mês
  contarPresencasMes(id: number): number {
    const aluno = this.alunos.find(a => a.id === id);
    if (!aluno) return 0;
    return aluno.presencas.length;
  }

  // Remove um aluno da lista
  excluirAluno(id: number) {
    const posicao = this.alunos.findIndex(aluno => aluno.id === id);
    if (posicao !== -1) {
      this.alunos.splice(posicao, 1);
      return true;
    }
    return false;
  }
}