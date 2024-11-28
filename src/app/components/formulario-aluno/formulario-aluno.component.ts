import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlunoService } from '../../services/aluno.service';

@Component({
  selector: 'app-formulario-aluno',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-aluno.component.html'
})
export class FormularioAlunoComponent {
  aluno = {
    nome: '',
    turma: ''
  };

  constructor(
    private alunoService: AlunoService,
    private router: Router
  ) {}

  onSubmit() {
    this.alunoService.adicionarAluno(this.aluno);
    this.router.navigate(['/alunos']);
  }
}