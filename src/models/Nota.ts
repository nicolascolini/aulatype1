import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export class Nota extends Model {
  public id!: number;
  public alunoId!: number;
  public disciplinaId!: number;
  public valor!: number;
}

Nota.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    alunoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    disciplinaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "notas",
    timestamps: false,
  }
);