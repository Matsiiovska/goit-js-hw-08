import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
localStorage.setItem('videoplayer-current-time', data.seconds);//зберігає час у локальне середовище
};

 player.on('timeupdate', throttle(onPlay, 1000));//відстежує поді оновлення часу відтворення

const currentTime = Number(localStorage.getItem('videoplayer-current-time'));

player.setCurrentTime(currentTime || 0);//зберігає хвилини відтворення на сторінці
// player.setColor('#45a247').then(function (color) {
//     // the color that was set
// }).catch(function (error) {
//     // an error occurred setting the color
// });