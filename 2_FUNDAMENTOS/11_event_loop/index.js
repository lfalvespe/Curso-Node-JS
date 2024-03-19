// O event loop garante que a execução do código seja seguencial, de cima para baixo.

function a() {
    console.log('Executando a()')
}

function b() {
    console.log('Executando b()')
}

function c() {
    console.log('Executando c()')
}

// function c() {
//     console.log('Executando c()')
//     a()
//     b()
// }

// c()

c()
a()
b()
