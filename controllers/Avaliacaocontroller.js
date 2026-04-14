import Avaliacao from '../models/Avaliacao.js';
import Pedido from '../models/Pedido.js';

const AvaliacaoController = {
  create: async (req, res) => {
    try {
      const { pedidoId, nota, comentario } = req.body;
      const pedido = await Pedido.findByPk(pedidoId);

      if (!pedido) {
        return res.status(404).json({ error: 'Pedido não encontrado' });
      }

      const avaliacao = await Avaliacao.create({ pedidoId, nota, comentario });
      res.status(201).json(avaliacao);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  findAll: async (req, res) => {
    try {
      const avaliacoes = await Avaliacao.findAll();
      if (avaliacoes.length === 0) {
        return res.status(404).json({ error: 'Não há avaliações' });
      }
      res.status(200).json(avaliacoes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  findById: async (req, res) => {
    try {
      const avaliacao = await Avaliacao.findByPk(req.params.id);
      if (!avaliacao) {
        return res.status(404).json({ error: 'Avaliação não encontrada' });
      }
      res.status(200).json(avaliacao);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const avaliacao = await Avaliacao.findByPk(req.params.id);
      if (!avaliacao) {
        return res.status(404).json({ error: 'Avaliação não encontrada' });
      }
      await avaliacao.update(req.body);
      res.status(200).json(avaliacao);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const avaliacao = await Avaliacao.findByPk(req.params.id);
      if (!avaliacao) {
        return res.status(404).json({ error: 'Avaliação não encontrada' });
      }
      await avaliacao.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default AvaliacaoController;
