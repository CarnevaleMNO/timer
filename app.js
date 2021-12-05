//Query Selectors
const interface = document.querySelector(".interface");
const duration = document.querySelector("#duration");
const startBtn = document.querySelector("#start-btn");
const pauseBtn = document.querySelector("#pause-btn");

//Class and methods
class Timer {
  constructor(durationInput, startBtn, pauseBtn) {
    this.durationInput = durationInput;
    this.startBtn = startBtn;
    this.pauseBtn = pauseBtn;

    this.startBtn.addEventListener("click", this.start);
    this.pauseBtn.addEventListener('click', this.pause);
  }
  
  start = () => {
    this.tick();
    this.intervalId = setInterval(this.tick, 1000);
  }
  
  pause = () => {
    clearInterval(this.intervalId);
  }
  
  tick = () => {
    if(this.timeRemaining <= 0){
        this.pause();
    } else if(this.timeRemaining > 0){
    this.timeRemaining = this.timeRemaining - 1;
    }
  }

  get timeRemaining(){
      return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time){
    this.durationInput.value = time;
  }

}

//New class
const countdownTimer = new Timer(duration, startBtn, pauseBtn);

