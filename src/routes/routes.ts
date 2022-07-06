import { Router } from "express";
import * as LoginController from "../controllers/loginController";
import * as EstoqueController from "../controllers/estoqueController"
import * as AddController  from "../controllers/addController";

const router = Router();

router.get('/', LoginController.getLogin);
router.post('/', LoginController.postLogin);

router.get('/estoque/cpu', EstoqueController.getCpu);

router.get('/estoque/cpu/adicionar', AddController.getAdd);
router.post('/estoque/cpu/adicionar', AddController.postAdd);

router.get('/estoque/cpu/:id/mais', EstoqueController.addIdade);
router.get('/estoque/cpu/:id/menos', EstoqueController.diminuirIdade);

export default router;