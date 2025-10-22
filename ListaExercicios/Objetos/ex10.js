const usuario ={
    nome:'Carlos',
    idade:30
}

const usuarioMod = {...usuario};
usuarioMod.nome = 'David'
usuarioMod.idade = 25
usuarioMod.cidade = 'Ouro Preto'
console.log(usuario);
console.log(usuarioMod);