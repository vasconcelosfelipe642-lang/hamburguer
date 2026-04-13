import { Router } from 'express';
import AvaliacaoController from '../controllers/Avaliacaocontroller.js';

const router = Router();

router.post('/', AvaliacaoController.create);
router.get('/', AvaliacaoController.findAll);
router.get('/:id', AvaliacaoController.findById);
router.delete('/:id', AvaliacaoController.delete);
export default router;
