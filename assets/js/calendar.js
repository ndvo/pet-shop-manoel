window.onload = function () {
  setInitialDateFromURL();
  renderCalendar();
};

let currentDate = new Date();

function setInitialDateFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const yearParam = urlParams.get('year');
  const monthParam = urlParams.get('month');

  if (yearParam && monthParam) {
    const year = parseInt(yearParam, 10);
    const month = parseInt(monthParam, 10) - 1;
    if (!isNaN(year) && !isNaN(month) && month >= 0 && month <= 11) {
      currentDate = new Date(year, month, 1);
    }
  }
}

function renderCalendar() {
  const calendar = document.querySelector('.calendar');
  const currentMonth = document.getElementById('current-month');

  calendar.querySelectorAll('.calendar-cell').forEach(cell => cell.remove());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  currentMonth.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    const blankCell = document.createElement('div');
    blankCell.classList.add('calendar-cell');
    calendar.appendChild(blankCell);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayCell = document.createElement('div');
    dayCell.classList.add('calendar-cell');
    dayCell.textContent = day;
    dayCell.addEventListener('click', () => {
      window.location.href = `schedule.html?day=${day}&month=${month + 1}&year=${year}`;
    });
    calendar.appendChild(dayCell);
  }
}

document.getElementById('prev-month').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

document.getElementById('next-month').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});
