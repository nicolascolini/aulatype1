import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export class Presenca extends Model {
  public id!: number;
  public aluno_id!: number;
  public disciplina_id!: number;
  public data!: Date;
  public status!: string;
}

Presenca.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    aluno_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    disciplina_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('presente', 'faltou'),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Presenca',
    tableName: 'presencas',
    timestamps: true,
  }
);