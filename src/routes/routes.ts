import { Router } from 'express';

import * as AlunoController from '../controllers/AlunoController';

const router = Router();


router.post('/cadastrarAluno', AlunoController.cadastrarAluno);

// router.get('/listartodosAlunos', AlunoController.listarAlunos);

router


export default router;
