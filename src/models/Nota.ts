import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export class Nota extends Model {
  public id!: number;
  public aluno_id!: number;
  public disciplina_id!: number;
  public nota!: number;
  public data_avaliacao!: Date;
}

Nota.init(
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
    nota: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    data_avaliacao: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Nota',
    tableName: 'notas',
    timestamps: true,
  }
);
