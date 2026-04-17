import { Model, DataTypes } from 'sequelize';
import sequelize from "./Database.js";

export default class Categoria extends Model {

    static associate (models){
        Categoria.hasMany(models.Produto,{
            foreignKey: 'categoria_id',
            as : 'produtos'
        })
    }

}
Categoria.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'O nome não pode ser vazio' }
        }
    }
  },
  {
    sequelize,
    modelName: 'categoria',
    tableName: 'categorias',
    paranoid: true,    
    timestamps: true
  }
);