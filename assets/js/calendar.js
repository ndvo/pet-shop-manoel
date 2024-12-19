// Função para redirecionar ao calendário
window.onload = function () {
  renderCalendar();

}

// Variáveis para o estado atual
let currentDate = new Date();

function renderCalendar() {
  const calendar = document.querySelector('.calendar');
  const currentMonth = document.getElementById('current-month');

  // Limpa os dias anteriores
  calendar.querySelectorAll('.calendar-cell').forEach(cell => cell.remove());

  // Configura o mês e o ano
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  currentMonth.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;

  // Primeiro dia do mês e número de dias
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Preenchendo com células em branco antes do primeiro dia
  for (let i = 0; i < firstDay; i++) {
    const blankCell = document.createElement('div');
    blankCell.classList.add('calendar-cell');
    calendar.appendChild(blankCell);
  }

  // Preenchendo os dias do mês
  for (let day = 1; day <= daysInMonth; day++) {
    const dayCell = document.createElement('div');
    dayCell.classList.add('calendar-cell');
    dayCell.textContent = day;
    calendar.appendChild(dayCell);
  }
}

// Navegação entre meses
document.getElementById('prev-month').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

document.getElementById('next-month').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});
