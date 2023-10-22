import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(onPlay, 1000));
  
function onPlay(evt) {
  localStorage.setItem('videoplayerCurrentTime', JSON.stringify(evt.seconds));
}

if (!!localStorage.getItem('videoplayerCurrentTime')) {
  player.setCurrentTime(JSON.parse(localStorage.getItem('videoplayerCurrentTime')));
}