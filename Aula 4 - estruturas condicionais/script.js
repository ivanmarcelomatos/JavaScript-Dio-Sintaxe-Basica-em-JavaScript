// estruturas condicionais

// estruturas de decisão




var jogador1 = 1;
var jogador2 = 3;
var placar;



// // if

// // aninhando if's
// // if ternário
// jogador1 != -1 && jogador2 != -1 ? console.log('os jogadores são válidos') : console.log('os jogadores não são válidos');
// if (jogador1 > 0 && jogador2 == 0) {
//     console.log('o jogador 1 marcou ponto');
//     placar = jogador1 > jogador2;
// }
// // usando o else if
// else if (jogador2 > 0 && jogador1 == 0) {
//     console.log('o jogador 2 marcou ponto');
//     placar = jogador2 > jogador1;
// }
// // usando o else
// else {
//     console.log('ninguem marcou ponto');
// }







// // usando switch case
// placar = jogador2 > jogador1;
// console.log(placar);
// switch (placar) {
//     case placar = jogador1 > jogador2:
//         console.log('jogador 1 ganhou');
//         break;
//     case placar = jogador2 > jogador1:
//         console.log('jogador 2 ganhou');
//         break;
//     default:
//         console.log('ninguem marcou ponto')
// }









// // estruturas de repetição

// let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']
// let object = { propriedade1: '12587', propriedade2: 'valor2', propriedade3: 'valor3'}


// // for - executa até que seja false
// for (let i = 0; i < array.length; i++) {
//     console.log(i);
// } 




// for/in - executa repetição a partir de uma propriedade

// // com array
// for (i in array) { //retnorna os índices
//     console.log(i);
// }


// // com object
// for (i in object) { //retorna as propriedades
//     console.log(i);
// }






// // for/of - executa repetição a partir de um valor
// // com array
// for (i of array) { //retorna os valores
//     console.log(i);
// }




// // COM OBJECT NÃO FUNCIONA! POIS NÃO É ITERÁVEL
// for (i of object.propriedade1) { // o retorno é fragmentando o valor
//     console.log(i);
// } 











// // while - executa enquanto for verdadeira
// var a = 0;
// while (a < 10) {
//     a++;
//     console.log(a)
// }




// // do - executa até que seja falsa
// var a = 0;
// do {
//     a++;
//     console.log(a);
// } while (a < 10);