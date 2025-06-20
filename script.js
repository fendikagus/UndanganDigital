// Countdown
const countdown = () => {
  const eventDate = new Date("October 7, 2025 08:00:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  if(distance < 0){
    document.getElementById("timer").innerHTML = "Acara sudah berlangsung!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
};

setInterval(countdown, 1000);
