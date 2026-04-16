import { Router } from 'express';

import categoriaController from  '../controllers/categoriaController.js';

const router = Router();

router.post('/', categoriaController.create);
router.get('/', categoriaController.findAll);
router.get('/:id', categoriaController.findById);
router.put('/:id', categoriaController.update);
router.delete('/:id', categoriaController.delete);
router.put('/restaure/:id', categoriaController.restaure);

export default router;