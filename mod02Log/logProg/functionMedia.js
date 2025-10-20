function calculaMedia(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5 ){
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}
let media = 9;
console.log(calculaMedia(media));