import { Router, Request, Response } from 'express';
import { login } from '../controllers/authController';
import { autenticarToken, apenasProfessores } from '../middlewares/authMiddleware';
import { permitirAcesso } from '../middlewares/permitirAcesso';
import * as AlunoController from '../controllers/AlunoController';
import * as DisciplinaController from '../controllers/DisciplinaController';
import * as AlunoDisciplinaController from '../controllers/AlunoDisciplinaController';
import * as ProfessorController from '../controllers/ProfessorController';
import * as TurmaController from '../controllers/TurmaController';
import * as PresencaController from '../controllers/PresencaController';
import * as apiController from '../controllers/apiController';
import { Professor } from '../models/Professor';
import { Aluno } from '../models/Aluno';

const router = Router();

// Rota pública para login
router.post('/login', login);

// Middleware para proteger as rotas abaixo (requer token válido)
router.use(autenticarToken);

// Dashboard acessível para qualquer usuário autenticado
router.get('/dashboard', (req: Request, res: Response) => {
  res.json({ mensagem: `Bem-vindo, ${req.usuario?.nome}!` });
});

// Listar professores: permitido para professores e alunos
router.get('/listarProfessores', permitirAcesso(['professor', 'aluno']), async (req: Request, res: Response) => {
  const professores = await Professor.findAll();
  res.json(professores);
});

// Listar alunos: permitido apenas para professores
router.get('/listarAlunos', permitirAcesso(['professor']), async (req: Request, res: Response) => {
  const alunos = await Aluno.findAll();
  res.json(alunos);
});


// Aluno
router.get('/listarTodosAlunos', AlunoController.listarAlunos);
router.post('/cadastrarAluno', AlunoController.cadastrarAluno);
router.put('/atualizarAluno/:alunoId', AlunoController.atualizarAluno);

// Disciplina
router.get('/listarTodasDisciplinas', DisciplinaController.listarDisciplinas);
router.post('/cadastrarDisciplina', DisciplinaController.cadastrarDisciplina);

// Aluno-Disciplina
router.post('/vincularAlunoADisciplina', AlunoDisciplinaController.vincularAlunoADisciplina);
router.get('/listarDisciplinasDoAluno/:alunoId', AlunoDisciplinaController.listarDisciplinasDoAluno);

// Professor
router.post('/professores', ProfessorController.createProfessor);
router.get('/professores', ProfessorController.getProfessores);
router.get('/professores/:id', ProfessorController.getProfessorById);
router.put('/professores/:id', ProfessorController.updateProfessor);
router.delete('/professores/:id', ProfessorController.deleteProfessor);

// Turma
router.post('/turmas', TurmaController.createTurma);
router.get('/turmas', TurmaController.getTurmas);
router.get('/turmas/:id', TurmaController.getTurmaById);
router.put('/turmas/:id', TurmaController.updateTurma);
router.delete('/turmas/:id', TurmaController.deleteTurma);

// Presença
router.post('/presencas', PresencaController.createPresenca);
router.get('/presencas', PresencaController.getPresencas);
router.get('/presencas/:id', PresencaController.getPresencaById);
router.put('/presencas/:id', PresencaController.updatePresenca);
router.delete('/presencas/:id', PresencaController.deletePresenca);

export default router;
