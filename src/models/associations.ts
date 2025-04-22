import { Aluno } from "./Aluno";
import { Disciplina } from "./Disciplina";
import { AlunoDisciplina } from "./AlunoDisciplina";
import { Nota } from "./Nota";
import { Presenca } from "./Presenca";
import { Professor } from "./Professor";
import { Turma } from "./Turma";

// Relação N:N entre Aluno e Disciplina
Aluno.belongsToMany(Disciplina, {
    through: AlunoDisciplina,
    foreignKey: "alunoId"
});

Disciplina.belongsToMany(Aluno, {
    through: AlunoDisciplina,
    foreignKey: "disciplinaId"
});

Nota.belongsTo(Aluno, { foreignKey: "alunoId" });
Nota.belongsTo(Disciplina, { foreignKey: "disciplinaId" });
Aluno.hasMany(Nota, { foreignKey: "alunoId" });
Disciplina.hasMany(Nota, { foreignKey: "disciplinaId" });

Presenca.belongsTo(Aluno, { foreignKey: "alunoId" });
Presenca.belongsTo(Disciplina, { foreignKey: "disciplinaId" });
Aluno.hasMany(Presenca, { foreignKey: "alunoId" });
Disciplina.hasMany(Presenca, { foreignKey: "disciplinaId" });

Turma.hasMany(Aluno, { foreignKey: "turmaId" });
Aluno.belongsTo(Turma, { foreignKey: "turmaId" });

Professor.hasMany(Disciplina, { foreignKey: "professorId" });
Disciplina.belongsTo(Professor, { foreignKey: "professorId" });

console.log("Relações entre models configuradas");