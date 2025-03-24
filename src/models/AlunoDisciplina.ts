import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";
import { Aluno } from "./Aluno";
import { Disciplina } from "./Disciplina";

export class AlunoDisciplina extends Model {
    public alunoId!: number;
    public disciplinaId!: number;

}

AlunoDisciplina.init(
{
    alunoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Disciplina,
            key: "id",
        },
        onDelete: "CASCADE",
    },

},
{
    sequelize,
    tableName: "aluno_disciplinas",
    timestamps: false,
}
);