import { Router } from "express";
import * as LoginController from "../controllers/loginController";
import * as Estoque from "../controllers/estoque"

const router = Router();

router.get('/', LoginController.getLogin);
router.post('/', LoginController.postLogin);

router.post('/estoque/cpu', Estoque.getCpu);

export default router;