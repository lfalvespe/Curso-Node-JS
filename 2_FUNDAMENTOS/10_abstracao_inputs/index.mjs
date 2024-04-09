import inquirer from 'inquirer'

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual a primeira nota?'
    },
    {
        name: 'p2',
        message: 'Qual a segunda nota?'
    }
])
.then((answers) => {

    console.log(answers)

    const p1 = parseInt(answers['p1'])
    const p2 = parseInt(answers['p2'])
   
    const media = (p1 + p2)/2

    console.log(`A média é ${media}`)
})
.catch(err => console.log(err))

