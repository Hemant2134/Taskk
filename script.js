

function toggleFixedSection() {
    const fixedRightSection = document.getElementById('fixed-right-section');
    const fullView = fixedRightSection.querySelector('.fixed-full-view');
    const miniView = fixedRightSection.querySelector('.fixed-mini-view');

    if (fullView.style.display === "none") {
        // Show full content
        fullView.style.display = "block";
        miniView.style.display = "none";
        fixedRightSection.classList.remove('small-view');
    } else {
        // Collapse back to small view
        fullView.style.display = "none";
        miniView.style.display = "block";
        fixedRightSection.classList.add('small-view');
    }
}
  const countdown = () => {
    const countDate = new Date("Oct 09, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(8 - gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  };

  setInterval(countdown, 1000);


  const video = document.getElementById('myVideo');
  const startTime = 2; 
  video.addEventListener('loadedmetadata', () => {
    video.currentTime = startTime;
  });