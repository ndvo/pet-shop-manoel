document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedDay = urlParams.get('day');
    const selectedMonth = urlParams.get('month');
    const selectedYear = urlParams.get('year');

    const dateElement = document.getElementById('selected-date');
    dateElement.textContent = `${selectedDay}/${selectedMonth}/${selectedYear}`;

    const scheduleGrid = document.querySelector('.schedule-grid');

    const storedAppointments = getStoredAppointments(selectedDay, selectedMonth, selectedYear);
   
    for (let hour = 8; hour < 18; hour++) {
        const hourBlock = createHourBlock(hour, selectedDay, selectedMonth, selectedYear, storedAppointments);
        scheduleGrid.appendChild(hourBlock);
    }

    addButtonSchedule();

    function addButtonSchedule() {
        const button = document.getElementById('scheduleButton');
        if (button) {
            button.addEventListener('click', function (e) {
                e.preventDefault();

                const url = `appointment.html?day=${selectedDay}&month=${selectedMonth}&year=${selectedYear}`;

                window.location.href = url;
            });
        } else {
            console.error('Element with ID "scheduleButton" not found.');
        }
    }
});

function createHourBlock(hour, selectedDay, selectedMonth, selectedYear, storedAppointments) {
    const hourBlock = document.createElement('div');
    hourBlock.classList.add('hour-block', 'p-3', 'border', 'text-center', 'mb-2');
    hourBlock.textContent = `${hour}:00 - ${hour + 1}:00`;
    const listAppointmentsHour = storedAppointments
        .filter((appointment) => {
              return appointment.hour == hour;
        });

    if (listAppointmentsHour.length > 0) {
        hourBlock.classList.add('bg-danger', 'text-white');
        hourBlock.textContent += ' (Occupied)';
    } else {
        hourBlock.addEventListener('click', () => {
            window.location.href = `formSchedule.html?day=${selectedDay}&month=${selectedMonth}&year=${selectedYear}&hour=${hour}`;
        });
    }
    return hourBlock;
}

function getStoredAppointments(day, month, year) {
    const storedData = localStorage.getItem('appointments');
    const listAppointments = storedData ? JSON.parse(storedData) : [];

    return listAppointments
        .filter((appointment) => {
            return appointment.day === day && appointment.month === month && appointment.year === year;
        });

}