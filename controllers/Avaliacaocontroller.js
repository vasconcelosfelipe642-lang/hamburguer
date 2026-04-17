import Avaliacao from "../models/Avaliacao.js";

const AvaliacaoController = {
  create: async (req, res) => {
  try {
    const { nota, pedido_id } = req.body;

    if (!nota || nota < 1 || nota > 5) {
      return res.status(400).json({ error: "A nota deve estar entre 1 e 5." });
    }
    const novaAvaliacao = await Avaliacao.create({ nota, pedido_id });
    
    res.status(201).json(novaAvaliacao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
},
  findAll: async (req, res) => {
    try {
      const avaliacoes = await Avaliacao.findAll();
      if (avaliacoes.length === 0) {
        return res.status(404).json({ message: 'Nenhuma avaliação encontrada' });
      }
      res.status(200).json(avaliacoes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  findById: async (req, res) => {
    try {
      const avaliacao = await Avaliacao.findByPk(req.params.id);
      if (avaliacao) {
        res.status(200).json(avaliacao);
      } else {
        res.status(404).json({ error: 'Avaliação não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const { nota } = req.body;
      
      if (nota && (nota < 1 || nota > 5)) {
        return res.status(400).json({ error: "A nota deve estar entre 1 e 5." });
      }

      const avaliacao = await Avaliacao.findByPk(req.params.id);
      if (avaliacao) {
        await avaliacao.update(req.body);
        res.status(200).json(avaliacao);
      } else {
        res.status(404).json({ error: 'Avaliação não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const avaliacao = await Avaliacao.findByPk(req.params.id);
      if (avaliacao) {
        await avaliacao.destroy();
        res.status(200).json({ message: 'Avaliação excluída com sucesso' });
      } else {
        res.status(404).json({ error: 'Avaliação não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  restaure: async (req, res) => {
    try {
      const avaliacao = await Avaliacao.findByPk(req.params.id, { paranoid: false });
      if (avaliacao) {
        await avaliacao.restore();
        res.status(200).json({ message: 'Avaliação restaurada com sucesso' });
      } else {
        res.status(404).json({ error: 'Avaliação não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
export default AvaliacaoController;