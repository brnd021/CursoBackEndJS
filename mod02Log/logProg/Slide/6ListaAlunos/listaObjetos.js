const alunos = [

    { nome: 'Diego', nota: 9.0 },

    { nome: 'Ana', nota: 6.5 },

    { nome: 'Lucas', nota: 7.2 },

    { nome: 'Mariana', nota: 8.3 },

    { nome: 'João', nota: 5.9 },

];

const aprovados = alunos.filter(aluno => aluno.nota >= 7);
console.log("Nome e notas dos aprovados: ",aprovados,"\n");

const notasAprovados = aprovados.map(aluno => aluno.nota);
console.log("Notas dos aprovados: ",notasAprovados,"\n");

const media = (notasAprovados.reduce((acc,p)=> acc + p)/notasAprovados.length).toFixed(2);

console.log(`A medias dos aprovados vale: ${media}`);