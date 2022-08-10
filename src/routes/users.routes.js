import { Router } from 'express';
import * as usersController from '../controllers/users.controller';
import { verifySignup } from "../middlewares";

const router = Router();

router.post('/', [verifySignup.checkDuplicateEmail], usersController.postUsers);
router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getOneUser);
router.delete('/:id', usersController.deleteOneUser);
router.put('/:id', usersController.putUser);


export default router;