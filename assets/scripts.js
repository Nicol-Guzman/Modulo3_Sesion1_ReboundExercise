$(document).ready(function() {
    const alert = 'Pasajero, se le recuerda que para abordar el avión debe tener en mano su pasaporte y su boleto de embarque. Manténgase atento a los avisos mediante esta plataforma.';

    $('#alertMessage').text(alert);
    $('#alertContainer').removeClass('hidden');

    $('#closeAlert').on('click', function() {
        $('#alertContainer').addClass('hidden');
    });

    function updateTime() {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        day = day < 10 ? '0' + day : day;
        month = month < 10 ? '0' + month : month;

        const timeData = `${hours}:${minutes}`;
        const dateData = `${day}-${month}-${year}`;

        $('#insertTime').text(timeData);
        $('#insertDate').text(dateData);
    }

    function nextFlight() {
        let flight = Math.floor(Math.random() * 2999) + 1000;
        let terminal = Math.floor(Math.random() * 100) + 1;

        $('#flightNumber').text(flight);
        $('#terminalNumber').text(terminal);
    }

    updateTime();
    nextFlight();

    setInterval(updateTime, 1000);
});
