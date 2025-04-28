import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export class Turma extends Model {
  public id!: number;
  public nome!: string;
}

Turma.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Turma',
    tableName: 'turmas',
    timestamps: false,
  }
);