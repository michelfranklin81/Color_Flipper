const colors = ['Green','Red','Blue']; // Armazenando as cores em uma variável
const btn = document.getElementById('btn'); //Manipulando Dom atribuindo uma variável ao botão "Clique aqui"
const color = document.querySelector('.color'); //Manipulando Dom atribuindo uma variável à span "color"

btn.addEventListener('click', function(){ //O addEventListener dará início a função que vai gerar uma cor aleatóriamente  
  const randomNumber = getRandomNumber(); // Criando uma constante com a função que vai buscar o total de elementos do array entre 0 e 2 (2 = 3 elementos[0,1,2])
  document.body.style.backgroundColor = colors[randomNumber]; //Alterando a cor do background aleatória(random) 
  color.textContent = colors[randomNumber] //Alterando o nome da cor de acordo com o resultado do background
  
});

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}

