import { Router } from 'express';
import EntregaController from '../controllers/EntregaController.js';

const router = Router();

router.post('/', EntregaController.create); 
router.get('/', EntregaController.findAll);
router.get('/:id', EntregaController.findById);
router.put('/:id', EntregaController.update);
router.delete('/:id', EntregaController.delete);
export default router;