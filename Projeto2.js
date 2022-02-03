console.clear();
console.log();
const prompt = require("prompt-sync")();

console.log(`O Game \n 
Persiste em escolher um número de 1 até 3, e cada número equivale a um
tipo de epécie diferente, cada espécie possui sua fraquesa que é uma
outra espécie: \n
 1 equivalem a Espécie dos Demónios
 2 equivalem a Espécie das Fadas
 3 equivalem a Espécie dos Anões \n
 Você jogará o game contra a máquina que escolherá as espécies de forma aleatória,
e só existirão 3 resultados no confronto contra essas espécies que são: \n
 Vitória
 Derrota
 Empate \n
 As espécies que ganham uma das outras são: \n
Demónios ganham de Anões
Fadas ganham de Demónios
Anões ganham de Fadas \n
 As espeécies que perdem para outras são: \n
 Demónios perdem para as Fadas
 Fadas perdem para os Anões
 Anões perdem para Demónios \n
 O empate do game ocorre quando a máquinha sorteia a mesma espécie que
você selecionou. \n
 O game é jogado em rodas escolhidas pelo jogador ! `);

console.log();

let finish;
console.log();
console.log(`Lembrete:

1 equivale a Espécie dos Demónios
2 equivale a Espécie das Fadas
3 equivale a Espécie dos Anões`);

console.log();
do {
  let player = [0];
  let computer = [0];

  let round = +prompt("Quantas rodadas você deseja jogar? ");

  console.log();

  for (round = round; round > 0; round--) {
    let round1 = +prompt(" Escolha um número de 1 até 3: ");
    console.log();

    while ((round1 != 1 && round1 != 2 && round1 != 3) || isNaN(round1)) {
      console.log();
      console.log("Iválido");
      console.log();
      round1 = +prompt("Digite um número válido: ");
      console.log();
    }

    let random = Math.floor(Math.random() * 3 + 1);
    console.log(`A escolha do computador foi: ${random} `);

    if (
      (round1 == 1 && random == 3) ||
      (round1 == 2 && random == 1) ||
      (round1 == 3 && random == 2)
    ) {
      player[0]++;
      console.log();
      console.log("Você ganhou esta rodada. ");
    } else if (
      (round1 == 3 && random == 1) ||
      (round1 == 1 && random == 2) ||
      (round1 == 2 && random == 3)
    ) {
      computer[0]++;

      console.log();
      console.log(`O computador ganhou esta rodada.`);
    } else if (random == round1) {
      console.log();
      console.log("Ocorreu um empate. ");
    }

    console.log();

    console.log(` Você tem ${round - 1} rodadas`);

    console.log();
    console.log("-----------------------------------------");

    console.log();
  }
  if (player > computer) {
    console.log();
    console.log(`Você foi o grande campeão do Game, possuindo ${player[0]} ponto(s). 
    E o computador perdeu o Game, possuindo ${computer[0]} ponto(s)`);
  } else if (computer > player) {
    console.log();
    console.log(`O computador foi o grande campeão do Game possuindo ${computer[0]} ponto(s).
    E você perdeu o Gamer, possuindo ${player[0]} ponto(s).`);
  } else {
    console.log(`Ocorreu um empate e com isso não houve nenhum jogador.`);
  }
  console.log();
  console.log();

  finish =
    prompt(`Mesmo com o game sendo finalizado, há uma possibilide de joga-lo
novamente, caso queira digite 'sim' ou caso não queira digite 'nao': `);
  console.log();
} while (finish.toLowerCase() == "sim");
