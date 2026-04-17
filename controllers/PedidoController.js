import Entrega from "../models/entrega.js";
import Pedido from "../models/pedido.js";
import Avaliacao from "../models/avaliacao.js";
const pedidoController = {
    create: async (req, res) => {
        try {
            const pedido = await Pedido.create(req.body);
            res.status(201).json(pedido);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    findAll: async (req, res) => {
        try {
            const pedidos = await Pedido.findAll({
                include: [
                    { model: Entrega, as: 'entrega' },
                    { model: Avaliacao, as: 'avaliacao' }
                ]
            });

            if (pedidos.length === 0) {
                return res.status(404).json({ error: 'Não há pedidos' });
            }

            res.status(200).json(pedidos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    findById: async (req, res) => {
        try {
            const pedido = await Pedido.findByPk(req.params.id, {
                include: [
                    { model: Entrega ,include: [ { model: Avaliacao }]}
                ]
            });

            if (!pedido) {
                return res.status(404).json({ error: 'Pedido não encontrado' });
            }

            res.status(200).json(pedido);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const pedido = await Pedido.findByPk(req.params.id);
            if (!pedido) {
                return res.status(404).json({ error: 'Pedido não encontrado' });
            }
            await pedido.update(req.body);
            
            // Retornar com eager loading
            const pedidoAtualizado = await Pedido.findByPk(req.params.id, {
                include: [
                    { model: 'entrega' },
                    { model: 'avaliacao' }
                ]
            });
            res.status(200).json(pedidoAtualizado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const pedido = await Pedido.findByPk(req.params.id);
            if (!pedido) {
                return res.status(404).json({ error: 'Pedido não encontrado' });
            }
            await pedido.destroy();
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

export default pedidoController;