document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('appointmentForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        const appointment = {
            year: new URLSearchParams(window.location.search).get('year'),
            month: new URLSearchParams(window.location.search).get('month'),
            day: new URLSearchParams(window.location.search).get('day'),
            hour: new URLSearchParams(window.location.search).get('hour'),
            ownerName: formData.get('ownerName'),
            petName: formData.get('petName'),
            petSpecies: formData.get('petSpecies')
        };

        const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        appointments.push(appointment);
        localStorage.setItem('appointments', JSON.stringify(appointments));

        alert('Appointment successfully booked!');

        const url = `schedule.html?day=${appointment.day}&month=${appointment.month}&year=${appointment.year}`;
        window.location.href = url;
    });
});
