import { Router } from 'express';
import * as clientsController from '../controllers/clients.controller';

const router = Router();

router.post('/', clientsController.postClients);
router.get('/', clientsController.getAllClients);
router.get('/:id', clientsController.getOneClient);
router.delete('/:id', clientsController.deleteOneClient);
router.put('/:id', clientsController.putClient);


export default router;