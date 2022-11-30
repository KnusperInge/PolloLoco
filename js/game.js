let canvas;
let world;
let keyboard = new Keyboard();
let fullscreen = false;

function start() {
  document.getElementById('startScreen').classList.add('d-none');
  document.getElementById('startScreen').classList.remove('d-flex');
  document.getElementById('canvas').classList.remove('d-none');
  init();
}

function reload() {
  location.reload();

}
function init() {
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard);
  world.gameStatus = false;
}

function fullscreenModus() {
  let element = document.getElementById('display');
  if (!fullscreen) {
    enterFullscreen(element);
  } else {
    exitFullscreen();
  }
}

function enterFullscreen(element) {
  fullscreen = true;
  addProperties();
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {  // iOS Safari
    element.webkitRequestFullscreen();
  }
}

function exitFullscreen() {
  fullscreen = false;
  removeProperties();
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

function addProperties() {
  document.getElementById('display').classList.add('fullscreen');
  document.getElementById('startScreen').classList.add('fullscreen');
  document.getElementById('canvas').classList.add('fullscreen');
  document.getElementById('info-btn').classList.add('fullwidth');
}
function removeProperties() {
  document.getElementById('display').classList.remove('fullscreen');
  document.getElementById('startScreen').classList.remove('fullscreen');
  document.getElementById('canvas').classList.remove('fullscreen');
  document.getElementById('info-btn').classList.remove('fullwidth');
}
function openGameInfo() {
  document.getElementById('InfoFrame').classList.remove('d-none');
  document.getElementById('InfoFrame').classList.add('d-flex');
}

function closeGameInfo() {
  document.getElementById('InfoFrame').classList.remove('d-flex');
  document.getElementById('InfoFrame').classList.add('d-none');
}