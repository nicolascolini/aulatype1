import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export class Turma extends Model {
  public id!: number;
  public nome!: string;
  public cursoId!: number;
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
    cursoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "turmas",
    timestamps: false,
  }
);