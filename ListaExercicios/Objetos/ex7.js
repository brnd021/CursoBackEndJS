const aluno = {
    nome: "Bernardo",
    notas: [7,10,4,5,9,2],
    media: function(){
        return (this.notas.reduce((acumalador,valor)=>acumalador + valor,0)/this.notas.length).toFixed(2);
    }
}
console.log(aluno, aluno.media());