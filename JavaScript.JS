console.log("LÚMINA Magazine cargada correctamente");
function playSong(song) {

  const player = document.getElementById("audio-player");

  player.src = song;

  player.play();

}