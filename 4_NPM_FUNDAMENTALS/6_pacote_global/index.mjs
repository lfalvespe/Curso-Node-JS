// instalando o lodash de forma global:
// npm install -g lodash

import _ from 'lodash'

// ao rodar o programa, o node não localiza o lodash. É necessário rodar o comando:
//           npm link lodash

const arr = [1, 2, 2, 3, 3, 4, 4, 5]

console.log(_.sortedUniq(arr))