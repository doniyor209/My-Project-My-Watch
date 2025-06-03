function updateTime() {
    const now = moment();

    const hours = now.format('hh');   // 12-часовой формат
    const minutes = now.format('mm');
    const seconds = now.format('ss');
    const ampm = now.format('A');     // AM или PM

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;
}

// Обновляем каждую секунду
setInterval(updateTime, 1000);

updateTime();
