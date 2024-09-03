
$(document).ready(function() {
    $('#enviarCorreo').click(function() {
        alert("El correo fue enviado correctamente...");
    });

    $('body').on('dblclick', '.cambio-color', function() {
        $(this).css("color", $(this).css("color") === "rgb(255, 0, 0)" ? "" : "red");
    });

    $(".card-title").click(function() {
        $(".card-text").toggle("slow", function() {

        });
    });

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })
});


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});
