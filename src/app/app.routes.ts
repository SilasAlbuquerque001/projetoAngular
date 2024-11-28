import { Routes } from '@angular/router';
import { ListaAlunosComponent } from './components/lista-alunos/lista-alunos.component';
import { FormularioAlunoComponent } from './components/formulario-aluno/formulario-aluno.component';

export const routes: Routes = [
  { path: '', redirectTo: 'alunos', pathMatch: 'full' },
  { path: 'alunos', component: ListaAlunosComponent },
  { path: 'aluno/adicionar', component: FormularioAlunoComponent },
  { path: 'aluno/editar/:id', component: FormularioAlunoComponent }
];

