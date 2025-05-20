import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../instances/mysql";

export class Professor extends Model {
  public id!: number;
  public nome!: string;
  public siape!: string;
  public senha!: string;
}

Professor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },

    siape: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    senha: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Professor',
    tableName: 'professores',
    timestamps: false
  }
);