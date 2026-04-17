import { Router } from 'express';
import avaliacaoController from '../controllers/avaliacaoController.js';

const router = Router();

router.post('/', avaliacaoController.create);
router.get('/', avaliacaoController.findAll);
router.get('/:id', avaliacaoController.findById);
router.delete('/:id', avaliacaoController.delete);
router.put('/:id', avaliacaoController.update);
router.post("/restore/:id", avaliacaoController.restaure);
export default router;
