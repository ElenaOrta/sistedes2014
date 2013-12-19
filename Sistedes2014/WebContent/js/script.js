$(function(){

    var note = $('#note'),
        ts = (new Date(2014, 1, 28)).getTime(); // Fecha del evento

    $('#countdown').countdown({
        timestamp	: ts,
        callback	: function(days, hours, minutes, seconds){

            var message = "Quedan ";

            message += days + " día" + ( days==1 ? '':'s' ) + ", ";
            message += hours + " hora" + ( hours==1 ? '':'s' ) + ", ";
            message += minutes + " minuto" + ( minutes==1 ? '':'s' ) + " y ";
            message += seconds + " segundo" + ( seconds==1 ? '':'s' ) + " ";
            message += "para el 28 de Febrero.";

            note.html(message);
        }
    });

});