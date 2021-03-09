const sounds = ['alarm', 'bird', 'gameover', 'lion', 'rain', 'tick-tok']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', function () {
        stopSound();
        document.getElementById(sound).play()

    })

    document.getElementById('buttons').
        appendChild(btn);
})
function stopSound() {
    sounds.forEach(sound => {
        const songs = document.getElementById(sound);

        songs.pause();
        songs.currentTime = 0;
    })
}