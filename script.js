function whatsAppText(message) {
  window.InputEvent = window.Event || window.InputEvent;
  var event = new InputEvent("input", { bubbles: true });
  var textbox = document.getElementsByClassName("_3u328")[0];
  textbox.textContent = message;
  textbox.dispatchEvent(event);
  document.querySelector('[data-icon="send"]').click();
}

function spam(message, loop) {
  var delay = 1000; // 1 second

  for (var i = 0; i < loop; i++) {
    window.setTimeout(function() {
      whatsAppText(message);
    }, delay * i);
  }
}

//tempo em milesegundos
var tempo = 60000;

var intervalo = window.setInterval(lerolero, tempo);
function lerolero() {
  //Sua mensagem aqui
  whatsAppText("");
}
