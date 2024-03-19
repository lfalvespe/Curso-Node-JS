const x = 10

// checar se x é um número
if (!Number.isInteger(x)) {
  throw new Error("O valor de x não é um número inteiro!")
}

console.log("Continuando o código...")


// O throw encerra a execução do programa