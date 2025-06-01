import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export class Disciplina extends Model {
  public id!: number;
  public nome!: string;
  public professorId!: number | null;
}

Disciplina.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    professorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'professores',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  },
  {
    sequelize,
    tableName: "disciplinas",
    timestamps: false,
  }
);