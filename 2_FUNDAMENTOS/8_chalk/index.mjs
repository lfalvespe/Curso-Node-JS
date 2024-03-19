import chalk from 'chalk'


const nota = 9

if(nota > 7) {
    console.log(chalk.bgGreenBright.blackBright.bold('Parabéns, você foi aprovado!'))
} else {
    console.log(chalk.bgRed.yellowBright('Você precisa fazer prova de recuperação!'))
}

