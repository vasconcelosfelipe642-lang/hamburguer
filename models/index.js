import Categoria from './categoria.js';
import Produto from './produto.js';
import Pedido from './pedido.js';
import Entrega from './entrega.js';
import Avaliacao from './avaliacao.js';

const models = [Categoria, Produto, Pedido, Entrega, Avaliacao];

Object.values(models).forEach(model => {
  if (model.associate) {
    model.associate(models);
  }
});
export default models;