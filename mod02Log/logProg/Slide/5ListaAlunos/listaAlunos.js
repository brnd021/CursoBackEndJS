const alunos =[["Ana", 8.5, 7.0, 9.0],["Bruno", 6.0, 5.5, 7.0],["Carla", 9.0, 9.5, 8.5],["Diego", 7.5, 8.0, 7.0]];

alunos.forEach((p)=>{
    const [nome, ...notas] = p;
    const media = ((notas.reduce((acc,val)=>acc+val,0))/ 3).toFixed(2);
    console.log(`Nome: ${nome}\n Media:${media}\n Notas:${notas}
        `)
})
