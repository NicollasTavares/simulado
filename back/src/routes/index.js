import {Router} from 'express';
import {UsuarioController} from '../controllers/UsuarioController.js'
import {TarefaController} from '../controllers/TarefaController.js'
import Tarefa from '../models/TarefaModel.js';

const router = Router();

router.post('/novoUsuario', UsuarioController.novoUsuario);
router.get('/listarUsuarios', UsuarioController.listarUsuarios);
router.post('/novaTarefa', TarefaController.novaTarefa);
router.get('/listarTarefas', TarefaController.listarTarefas);
router.put('/atualizarStatus/:id', TarefaController.atualizarStatus);

export default router;