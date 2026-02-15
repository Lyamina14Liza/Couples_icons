const  game_board = document.querySelector('.board');
const start_board = document.querySelector('.board__button');
const input = document.querySelector('.board__input');
start_board.addEventListener('click', (event) => {
    event.preventDefault()
    let column = input.value;
    let number;
    if ( column >= 2 && column <= 6 && column % 2 == 0) {
         number = column *column;

    }
    else {
        number = 4;
    };

    createBoard();
});

function createBoard(columns, count) {
  gameBoard.textContent = "";
  const template = document.querySelector('#gameTableTemplate').cloneNode(true).content;
  const gameTable = template.querySelector('.table');
  const restartBtn =template.querySelector('.table__button');
  const icons = createIconsArray(count);

  icons.forEach((icon) => {
    gameTable.append(createCard(icon));
  });
//  for (let i = 0; i < count; i++) {
//    gameTable.append(createCard());
//}

  gameTable.style = `
    grid-template-columns: repeat(${columns}, 1fr);
    grid-template-rows: repeat(${columns}, 1fr);
  `;
  gameBoard.append(gameTable);

  restartBtn.addEventListener('click', () => {
    location.reload();
  });
  gameBoard.append(restartBtn);


  

  


}

function createCard(flippedIcon){
  const cardTemplate =document.querySelector('#cardTemplate').cloneNode(true).content;
  const card = cardTemplate.querySelector('.card');
  card.querySelector('#flippedIcon').classList.add(`fa-${flippedIcon}`);

  // card.addEventListener('click', (event) => gameLogic(event, card));

  // rutern card означает, что получившийся объект "выбрасывается" в то место,
  //  где будет вызвана функция createCard
  return card;
}

function createIconsArray(initialCount){
  const cardsIcons = [
    "compass",
     "cloud",
     "play", 
     "bolt", 
     "stop", 
     "cogs", 
     "atom", 
     "basketball-ball", 
     "arrows", 
     "angle-left", 
     "bars", "file", 
     "filter", "gear", 
     "folder", 
     "folder-open", 
     "shield", 
     "scissors", 
     "pen-clip"];
  

// slice - метод, который возвращает только некоторые элементы массива,
//  начиная 0-м и заканчивая, например, 2-м, 8-м или 18-м
//сделаем так, что если игрок выберет поле 4х4 (16 ячеек), то выберется 8 иконок
  let cards = cardsIcons.slice(0, Math.floor(initialCount / 2));
const duobleCards = dublicateElements(cards);

  
};


function dublicateElements(array){
const newArray = [];
// Перебирается массив array и каждый элемент массива (item) дважды вставляется в новый массив
  array.forEach((item) => {
    newArray.push(item, item);
  });
  return newArray;
};

function shuffleArray(array) {
  // Определяем количество элементов массива
  let currentIndex = array.length;

  // Повторяем до тех пор, пока текущий индекс не достиг нуля
  while (currentIndex !== 0) {
    
    // Генерируем рандомный индекс
    const randomIndex = Math.floor(Math.random * currentIndex);
    // Отнимаем индекс
    currentIndex --;
    // Сохраняем элемент текущего индекса
    const temp = array[currentIndex];
    // По текущему индексу размещаем элемент по случайному индексу
    array[currentIndex] = array[randomIndex];
    // А на место элемента по случайному индексу ставим сохраненный элемент бывшего текущего индекса
    array[randomIndex] = temp;
  };

  // Возвращаем измененный массив
  return array;
}