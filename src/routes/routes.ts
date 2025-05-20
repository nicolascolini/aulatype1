import { Router } from 'express';
import AuthController from '../controllers/authController'; // Assumindo export default
import { autenticarToken, apenasProfessores } from '../middlewares/authMiddleware';
import permitirAcesso from '../middlewares/permitirAcesso';
import * as AlunoController from '../controllers/AlunoController';
import * as DisciplinaController from '../controllers/DisciplinaController';
import * as AlunoDisciplinaController from '../controllers/AlunoDisciplinaController';
import * as ProfessorController from '../controllers/ProfessorController';
import * as TurmaController from '../controllers/TurmaController';
import * as PresencaController from '../controllers/PresencaController';
import * as apiController from '../controllers/apiController';
import * as NotaController from '../controllers/NotaController';
import { Professor } from '../models/Professor';
import { Aluno } from '../models/Aluno';

const router = Router();

// Rota pública para login (sem autenticação)
router.post('/login', AuthController.login);

// Middleware para proteger as rotas abaixo (requer token válido)
router.use(autenticarToken);

// Dashboard acessível para qualquer usuário autenticado
router.get('/dashboard', (req, res) => {
  res.json({ mensagem: `Bem-vindo, ${req.usuario?.nome}!` });
});

// Listar professores: permitido para professores e alunos
router.get('/listarProfessores', permitirAcesso(['professor', 'aluno']), async (req, res) => {
  const professores = await Professor.findAll();
  res.json(professores);
});

// Listar alunos: permitido apenas para professores
router.get('/listarAlunos', permitirAcesso(['professor']), async (req, res) => {
  const alunos = await Aluno.findAll();
  res.json(alunos);
});

// Outras rotas da sua API
router.get("/saudacao", apiController.apiSaudacao);

router.get('/listarTodosAlunos', AlunoController.listarAlunos);
router.post('/cadastrarAluno', AlunoController.cadastrarAluno);
router.put('/atualizarAluno/:alunoId', AlunoController.atualizarAluno);

router.get('/listarTodasDisciplinas', DisciplinaController.listarDisciplinas);
router.post('/cadastrarDisciplina', DisciplinaController.cadastrarDisciplina);
// router.put('/atualizarDisciplina/:disciplinaId', DisciplinaController.atualizarDisciplina);

router.post("/vincularAlunoADisciplina", AlunoDisciplinaController.vincularAlunoADisciplina);
router.get("/listarDisciplinasDoAluno/:alunoId", AlunoDisciplinaController.listarDisciplinasDoAluno);

router.post('/professores', ProfessorController.createProfessor);
router.get('/professores', ProfessorController.getProfessores);
router.get('/professores/:id', ProfessorController.getProfessorById);
router.put('/professores/:id', ProfessorController.updateProfessor);
router.delete('/professores/:id', ProfessorController.deleteProfessor);

router.post('/turmas', TurmaController.createTurma);
router.get('/turmas', TurmaController.getTurmas);
router.get('/turmas/:id', TurmaController.getTurmaById);
router.put('/turmas/:id', TurmaController.updateTurma);
router.delete('/turmas/:id', TurmaController.deleteTurma);

// Presenças
router.post('/presencas', PresencaController.createPresenca);
router.get('/presencas', PresencaController.getPresencas);
router.get('/presencas/:id', PresencaController.getPresencaById);
router.put('/presencas/:id', PresencaController.updatePresenca);
router.delete('/presencas/:id', PresencaController.deletePresenca);

export default router;
