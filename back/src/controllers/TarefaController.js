import Tarefa from '../models/TarefaModel.js';

export const TarefaController = {
    novaTarefa: async (req, res) => {
        try {
            const { id_usuario, descricao, equipe, prioridade } = req.body;
            console.log(req.body);
            const status= "NÃO INICIADO"
            const tarefa = new Tarefa({ id_usuario, descricao, equipe, prioridade, status })
            console.log(tarefa);
            const result = await tarefa.insertTarefa();
            console.log(result);
            
            res.json({ result });
        } catch (error) {
            res.json({ message: error })
        }
    },

    listarUsuarios: async (req, res) => {
        try {
            
            const users = await Usuario.listarUsuarios();
            console.log(users);
            
            res.json({ users });
        } catch (error) {
            res.json({ message: error })
        }
    },

    listarTarefas: async (req, res) => {
        try {
            console.log("oiytfytfdyfdyrd");
            const tarefas = await Tarefa.listarTarefas()
            console.log("yyyyyyyy",tarefas);
            
            res.json({ tarefas });
        } catch (error) {
            res.json({ message: error })
        }
    },

    atualizarStatus: async (req, res) => {
        try {
          const {id} = req.params;
          const {status} = req.body;
          const newStatus = status.toUpperCase();
          const tarefas = await Tarefa.atualizarStatus(id, newStatus);
          res.json({ tarefas });
        } catch (error) {
          res.json({ message: error });
        }
    },

    deleteTarefa: async (req, res) => {
        try {
          const {id} = req.params;
          const {status} = req.body;
          const newStatus = status.toUpperCase();
          const tarefas = await Tarefa.atualizarStatus(id, newStatus);
          res.json({ tarefas });
        } catch (error) {
          res.json({ message: error });
        }
    }
    
    
} 