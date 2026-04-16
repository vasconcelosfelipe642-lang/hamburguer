import { Router } from 'express';
import entregaController from '../controllers/entregaController.js';

const router = Router();

router.get('/', entregaController.index);
router.get('/:id', entregaController.show);
router.post('/', entregaController.store);
router.put('/:id', entregaController.update);
router.delete('/:id', entregaController.destroy);

export default router;