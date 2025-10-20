const a =1;
const b =5;
const c =0;

const delta = (Math.pow(b,2)) - (4*a*c);
const raiz1 = (-b + Math.sqrt(delta)) / (2*a);
const raiz2 = (-b - Math.sqrt(delta)) / (2*a);

console.log(`O valor de delta é: ${delta}`);
console.log(`As raízes da equação são: ${raiz1.toFixed(2)} e ${raiz2.toFixed(2)}`);