
function createHourBlock(hour) {
  const hourBlock = document.createElement('div');
  hourBlock.classList.add('hour-block', 'p-3', 'border', 'text-center', 'mb-2');
  hourBlock.textContent = `${hour}:00 - ${hour + 1}:00`;

  hourBlock.addEventListener('click', () => {
      window.location.href = `formSchedule.html?day=${selectedDay}&month=${selectedMonth}&year=${selectedYear}&hour=${hour}`;
  });
  return hourBlock;
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedDay = urlParams.get('day');
    const selectedMonth = urlParams.get('month');
    const selectedYear = urlParams.get('year');

    const dateElement = document.getElementById('selected-date');
    dateElement.textContent = `${selectedDay}/${selectedMonth}/${selectedYear}`;

    const scheduleGrid = document.querySelector('.schedule-grid');

    for (let hour = 8; hour <= 18; hour++) {
        const hourBlock = createHourBlock(hour);

        scheduleGrid.appendChild(hourBlock);
    }
});
