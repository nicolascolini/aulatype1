import { Router } from 'express';

import * as AlunoController from '../controllers/AlunoController';
import * as DisciplinaController from '../controllers/DisciplinaController';
import * as AlunoDisciplinaController from '../controllers/AlunoDisciplinaController';
import * as ProfessorController from '../controllers/ProfessorController';
import * as TurmaController from '../controllers/TurmaController';
import * as PresencaController from '../controllers/PresencaController';
import * as apiController from '../controllers/apiController';
import * as NotaController from '../controllers/NotaController';


const router = Router();

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
