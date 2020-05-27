
  function Email() {
    var name = document.modulo.name.value;
    var email = document.modulo.email.value;
    var messaggio = document.modulo.messaggio.value;

    if ((email.indexOf("@") == (-1)) || (email == "") || (email == "undefined")) {
      alert("Inserire un indirizzo email valido.");
      document.modulo.email.focus();
    }
    else if ((name == "") || (name == "undefined")) {
      alert("Inserisci il tuo nome");
      document.modulo.name.focus();
    }
    else if ((messaggio == "") || (messaggio == "undefined")) {
      alert("Inserisci un messaggio.");
      document.modulo.messaggio.focus();
    }
    else {
    location.href = "mailto:" + email + "?Subject=" + name + "&Body=" + messaggio;
    }
  }


  $(window).scroll(function() {
          if($(this).scrollTop() > 10) {
              $('.navbar').addClass('sfondo2');
              $('.nav-link').addClass('color_text2');
          } else {
              $('.navbar').removeClass('sfondo1');
              $('.nav-link').removeClass('color_text');
          }
        });
