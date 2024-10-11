// Файл для настроек приложения
const TIMEOUT = 800;



const AppRoute = {
    Initial: 'initial',
    Game: 'game',
    Results: 'results',
  };

const GAME_TYPES = [
  {type: 'cats', icon: 'cats', label: 'Котики'},
  {type: 'flowers', icon: 'flowers', label: 'Цветочки'},
  {type: 'cars', icon: 'cars', label: 'Машины'},
]

window.TIMEOUT = TIMEOUT;
window.GAME_TYPES = GAME_TYPES;
const RANDOMIZED = false;