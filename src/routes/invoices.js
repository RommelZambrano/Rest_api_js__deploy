import { Router } from 'express';
import * as invoicesController from '../controllers/invoices.controller';

const router = Router();

router.post('/', invoicesController.postInvoices);
router.get('/', invoicesController.getAllInvoices);
router.get('/:id', invoicesController.getOneInvoice);
router.delete('/:id', invoicesController.deleteOneInvoice);
router.put('/:id', invoicesController.putInvoice);


export default router;