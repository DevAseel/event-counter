const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

let countDown = () =>{
    const countDate = new Date("April 03, 2022 00:00:00").getTime();
    const currentTime = new Date().getTime();
    const timeLeft = countDate - currentTime;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const daysLeft = Math.floor(timeLeft / day);
    const hoursLeft = Math.floor((timeLeft % day)/hour);
    const minutesLeft = Math.floor((timeLeft % hour)/minute);
    const secondsLeft = Math.floor((timeLeft % minute)/second);
    console.log(secondsLeft);

    days.innerText = daysLeft;
    hours.innerText = hoursLeft;
    minutes.innerText = minutesLeft;
    seconds.innerText = secondsLeft;
};

setInterval(countDown, 1000);