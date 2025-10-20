import sqlite3 from 'sqlite3';
import { open } from 'sqlite';


async function criarEPopularTabelaUsuarios(nome, nota, faltas) {
    
    const db = await open({
        filename: './dataBase.db',
        driver: sqlite3.Database,
    });
    await db.run(
        `CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, nome TEXT, nota REAL, faltas REAL)`
    );
    await db.run(
        `INSERT INTO usuarios (nome, nota,faltas) VALUES (?, ?, ?)`,
        [nome, nota, faltas]
    );

    const usuarios = await db.all(`SELECT * FROM usuarios`);
    console.log(`Alunos na database: ${usuarios}`);

    await db.close();
}

function verificarEAdicionarUsuario(nome, nota, faltas) {
if (nome && !isNaN(nota) && !isNaN(faltas)) {
        criarEPopularTabelaUsuarios(nome, nota, faltas)}
    else if (isNAN(nota) || nota < 0 || nota > 10){
        nota.textContent = 'Por favor, insira todas as informações corretamente.';
    }
    else if (isNAN(faltas) || faltas < 0){
        faltas.textContent = 'Por favor, insira todas as informações corretamente.';
    }
}

class Usuario {
    constructor(nome, nota, faltas) {
        this.nome = nome;
        this.nota = nota;
        this.faltas = faltas;
    }
}



const nome = document.getElementById('nome').value;
const nota = parseFloat(document.getElementById('nota').value);
const faltas = parseFloat(document.getElementById('faltas').value);
const botao = document.getElementById('enviar');
const resultado = document.getElementById('resultado');

botao.addEventListener('click', function() {

    verificarEAdicionarUsuario(nome, nota, faltas);
    resultado.textContent = `Dados salvos com sucesso!`;
});