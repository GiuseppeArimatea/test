
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
              $('.menu-global').addClass('global2');

          } else {
              $('.navbar').removeClass('sfondo1');
              $('.nav-link').removeClass('color_text');
              $('.menu-global').removeClass('global1');
          }
        });


        var Menu = {
        el: {
          menu: $('.menu'),
          menuTop: $('.menu-top'),
          menuClose: $('.menu-close'),
          menuMiddle: $('.menu-middle'),
          menuBottom: $('.menu-bottom'),
          menuText: $('.menu-text')
        },

        init: function() {
          Menu.bindUIactions();
        },

        bindUIactions: function() {
          Menu.el.menu
              .on(
                'click',
              function(event) {
              Menu.activateMenu(event);
              event.preventDefault();
            }
          );
        },

        activateMenu: function() {
          Menu.el.menuTop.toggleClass('menu-top-expand expand');
          Menu.el.menuMiddle.toggleClass('menu-middle-expand expand');
          Menu.el.menuBottom.toggleClass('menu-bottom-expand expand');
          Menu.el.menuText.toggleClass('menu-text-expand');
          Menu.el.menuClose.toggleClass('menu-close-visible');
        }
      };

        //Stop menu item click closing the menu
        $(".menu .menu-global").click(function(e) {
            e.stopPropagation();
      });

      Menu.init();
