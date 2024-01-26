/* 
1º Elementos DOM
2º Variables js
3º initApp
- listener
*/

// INICIALIZAR APP

//
let ScoreInicial = 0
let dado

// SELECCIÓN ELEMENTOS DOM
const totalScoreP1 = document.querySelector('#score--0')
const totalScoreP2 = document.querySelector('#score--1')
const currentScoreP1 = document.querySelector('#current--0')
const currentScoreP2 = document.querySelector('#current--1')

const btnRoll = document.querySelector('.btn--roll') /* BOTON ROLL */
const btnHold = document.querySelector('.btn--hold') /* BOTON HOLD */
const btnNew = document.querySelector('.btn--new') /* BOTON NEW */
console.log(btnRoll, btnHold, btnNew)

const imagen = document.querySelector('.dice')
/* imagen.setAttribute('src', 'img/dice-1.png') */
/* console.log(imagen) */

///
btnRoll.addEventListener('click', () => {
  dado = Math.trunc(Math.random() * 6 + 1)
  console.log(dado)
  switch (dado) {
  case 1:
    imagen.setAttribute('src', 'img/dice-1.png')
    break
  case 2:
    imagen.setAttribute('src', 'img/dice-2.png')
    break
  case 3:
    imagen.setAttribute('src', 'img/dice-3.png')
    break
  case 4:
    imagen.setAttribute('src', 'img/dice-4.png')
    break
  case 5:
    imagen.setAttribute('src', 'img/dice-5.png')
    break
  case 6:
    imagen.setAttribute('src', 'img/dice-6.png')
    break
  default: imagen.setAttribute('src', 'img/dice-5.png')
  }
  if (dado === 1) {
    //pierdes turno
  } else {
    // sumar número al currentScore
    
  }


})
//
btnHold.addEventListener('click', () => {
  console.log('hold')
})
//
btnNew.addEventListener('click', () => {
  console.log('new')
})
///

totalScoreP1.textContent = ScoreInicial
totalScoreP2.textContent = ScoreInicial
currentScoreP1.textContent = ScoreInicial
currentScoreP2.textContent = ScoreInicial

// console.log()
