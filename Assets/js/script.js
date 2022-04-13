var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(function () {

  $('#enviarCorreo').click(function () {
    alert('El correo fue enviado correctamente...');
  })

  $('#favoritos').click(function () {
    alert('La receta fue añadida a favoritos...');
  })

  $("h3").on({
    dblclick: function() {
      $(this).css({
        color:'red'
      })
    }
  })

  $('.card-title').click(function(){
    $('.card-body').toggle();
  });

});
