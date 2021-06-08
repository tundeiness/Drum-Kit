


const animate =(evt)=>{
    const key = document.querySelector(`div[data-key="${evt.which}"]`);
     key.classList.add('playing')

     const removeTransition = (evt) => {
        //  console.log(evt)
        if(evt.propertyName !== 'transform') return;
        key.classList.remove('playing');
      }

     const keys = document.querySelectorAll('.keys');

     keys.forEach(key => key.addEventListener('transitionend', removeTransition));
}


const playSound=(evt)=> {
    const audio = document.querySelector(`audio[data-key="${evt.which}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
}

const combine = (evt) => {
    playSound(evt);
    animate(evt)
}


window.addEventListener('keydown', combine)