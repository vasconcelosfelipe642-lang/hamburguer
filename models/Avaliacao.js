import { Model, DataTypes } from 'sequelize';
import sequelize from './Database.js';
export default class Avaliacao extends Model {
  static associate(models) {
    Avaliacao.belongsTo(models.Pedido, {
      foreignKey: 'pedido_id',
      as: 'pedido'
    });
  }
}

Avaliacao.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5
      }
    },
    pedido_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  {
    sequelize,
    tableName: 'avaliacoes',
    timestamps: true,
    paranoid: true
  }
);