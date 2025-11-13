let intervaloId;
let contador = 0;

function iniciarIntervalo() {
  // Evita criar vários intervalos ao mesmo tempo
  if (intervaloId) return;

  intervaloId = setInterval(() => {
    contador++;
    console.log(`Contador: ${contador}`);
  }, 1000);
}

function pararIntervalo() {
  clearInterval(intervaloId);
  intervaloId = null;
}

function reiniciarIntervalo() {
  pararIntervalo();   // cancela o antigo
  contador = 0;       // opcional: reseta variáveis
  iniciarIntervalo(); // cria novamente
}

// uso:
iniciarIntervalo();
// depois de alguns segundos:
setInterval(reiniciarIntervalo, 5000);
