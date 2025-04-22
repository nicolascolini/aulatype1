import { Model, DataTypes} from "sequelize";
import { sequelize } from "../instances/mysql";
import { Professor } from './Professor';

export class Disciplina extends Model {

    public id!: number;
    public nome!: string;
}

Disciplina.init(

  {

    ProfessorId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
  },

},
{

    sequelize,
    tableName: "disciplinas",
    timestamps: false,
}
);