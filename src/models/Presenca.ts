import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export class Presenca extends Model {
  public id!: number;
  public alunoId!: number;
  public disciplinaId!: number;
  public data!: Date;
  public status!: boolean;
}

Presenca.init(
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
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "presencas",
    timestamps: false,
  }
);