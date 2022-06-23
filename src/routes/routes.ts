import { Router } from "express";
import * as LoginController from "../controllers/loginController";
import * as EstoqueController from "../controllers/estoqueController"

const router = Router();

router.get('/', LoginController.getLogin);
router.post('/', LoginController.postLogin);

router.get('/estoque/cpu', EstoqueController.getCpu);

export default router;