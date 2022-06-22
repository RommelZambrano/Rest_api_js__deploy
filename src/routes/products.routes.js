import { Router } from 'express';
import * as productsController from '../controllers/products.controller';

const router = Router();

router.post('/', productsController.postProducts);
router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getOneProduct);
router.delete('/:id', productsController.deleteOneProduct);
router.put('/:id', productsController.putProduct);


export default router;