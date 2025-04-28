import { Aluno } from './Aluno';
import { Disciplina } from './Disciplina';
import { Professor } from './Professor';
import { Turma } from './Turma';
import { Nota } from './Nota';
import { Presenca } from './Presenca';

// Relacionamentos
Aluno.belongsTo(Turma, { foreignKey: 'turma_id' });
Turma.hasMany(Aluno, { foreignKey: 'turma_id' });

Disciplina.belongsTo(Professor, { foreignKey: 'professor_id' });
Professor.hasMany(Disciplina, { foreignKey: 'professor_id' });

Nota.belongsTo(Aluno, { foreignKey: 'aluno_id' });
Aluno.hasMany(Nota, { foreignKey: 'aluno_id' });

Nota.belongsTo(Disciplina, { foreignKey: 'disciplina_id' });
Disciplina.hasMany(Nota, { foreignKey: 'disciplina_id' });

Presenca.belongsTo(Aluno, { foreignKey: 'aluno_id' });
Aluno.hasMany(Presenca, { foreignKey: 'aluno_id' });

Presenca.belongsTo(Disciplina, { foreignKey: 'disciplina_id' });
Disciplina.hasMany(Presenca, { foreignKey: 'disciplina_id' });