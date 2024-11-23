import {Router} from 'express';
import {UsuarioController} from '../controllers/UsuarioController.js'
import {TarefaController} from '../controllers/TarefaController.js'
import Tarefa from '../models/TarefaModel.js';

const router = Router();

router.post('/novoUsuario', UsuarioController.novoUsuario);
router.get('/listarUsuarios', UsuarioController.listarUsuarios);
router.post('/novaTarefa', TarefaController.novaTarefa);

export default router;