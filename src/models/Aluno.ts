import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export class Aluno extends Model {
    public id!: number;
    public nome!: string;
    public email!: string;
    public matricula!: string;
    public senha!: string;
    public turmaId!: number | null;
}

Aluno.init(
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

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    matricula: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    senha: {
      type: DataTypes.STRING,
      allowNull: false
    },

    turmaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'turmas',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    tableName: "alunos",
    timestamps: true,
    paranoid: true
  }
);