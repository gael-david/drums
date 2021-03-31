const keys = document.querySelectorAll(".key");
function playSound(event) {
    const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    
    if (!sound) return;
    sound.currentTime = 0;
    sound.play();

    key.classList.add("playing");
}
function playSoundClick() {
    const keyCode = this.dataset.key;
    const sound = document.querySelector(`audio[data-key="${keyCode}"]`);

    if (!sound) return;
    sound.currentTime = 0;
    sound.play();

    this.classList.add("playing");
}
function removeTransition(event) {
    if (event.propertyName != 'transform') return; //Only apply function to transform transitions
    this.classList.remove("playing");
}

window.addEventListener("keydown", playSound)
keys.forEach(key => {key.addEventListener("click", playSoundClick)});
keys.forEach(key => {key.addEventListener("transitionend", removeTransition)});