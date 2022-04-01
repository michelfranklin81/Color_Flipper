const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const btn = document.getElementById('btn'); //Manipulando Dom atribuindo uma variável ao botão "CLique aqui"
const color = document.querySelector('.color'); //Manipulando Dom atribuindo uma variável à span "color"

btn.addEventListener('click', function(){ //O addEventListener dará início a função que fará um loop com o for para criar a cor hexadecimal  
  let hexColor = '#'; // Criando uma variável para a hashtag
  for(let i = 0; i < 6; i++){ // for criado para rodar em loop enquanto o valor for de 0 a 6
    hexColor += hex[getRandomNumber()] // Concatenando a # com os números e letras do array para formar uma cor hexadecimal
  }
  color.textContent = hexColor; // Atribuindo a cor pronta (concatenada) à span
  document.body.style.backgroundColor = hexColor // Atribuindo a cor pronta (concatenada) ao background
});

function getRandomNumber(){
  return Math.floor(Math.random() * hex.length);
}

/* btn.addEventListener('click', function(){ 
  //get random number between 0 - 3 colors
  const randomNumber = getRandomNumber(); 
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber]; 
  color.textContent = colors[randomNumber]; 
});

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
} */
