import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pertenceFibonacci = (numero) => {
  let a = 0,
    b = 1,
    c = 0;
  if (numero === 0) return true;

  while (c < numero) {
    c = a + b;
    a = b;
    b = c;
  }

  return c === numero;
};

rl.question(
  "Informe um número para verificar se pertence à sequência de Fibonacci: ",
  (numero) => {
    numero = parseInt(numero);

    if (pertenceFibonacci(numero)) {
      console.log(`${numero} pertence à sequência de Fibonacci!`);
    } else {
      console.log(`${numero} NÃO pertence à sequência de Fibonacci.`);
    }

    rl.close();
  }
);
