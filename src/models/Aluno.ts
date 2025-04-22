import { Model, DataTypes} from "sequelize";
import { sequelize } from "../instances/mysql";
import { Turma } from './Turma';

export class Aluno extends Model {
    public id!: number;
    public nome!: string;
    public email!: string;
    public matricula!: string;
}

Aluno.init (
    {

        turmaId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'turmas',
                key: 'id'
            }
        },

nome: {
    type: DataTypes.STRING,
    allowNull: false,

},

email: {

    type: DataTypes.STRING, 
    unique: true,
    allowNull: false,
},

matricula: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
},
    },

{

    sequelize,
    tableName: "alunos",
    timestamps: true,
    paranoid: true,
}
);
