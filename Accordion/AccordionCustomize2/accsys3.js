var DATA = {
  "config": {
    "isCompressed": true
  },
  "icons": [{
    "id": "nivel-0",
    "toOpen": "img/arrow-down.png",
    "toClose": "img/arrow-up.png"
  }, 
  {
    "id": "nivel-1",
    "toOpen": "img//plus.jpeg",
    "toClose": "img//minus.jpeg"
  },
  {
    "id": "nivel-2",
    "toOpen": "img//icons8-closed-folder-16.png",
    "toClose": "img//icons8-opened-folder-16.png"
  }]
};

$(document).ready(() => {
  collapsible();
});

function collapsible() {
  $("[nivel='0']").find('.accordion-header').find('.icone').attr('src', DATA.icons[0].toOpen);
  
  $('.accordion').find('.accordion-header').click(function () {
    var isVisibleBody = $(this).next().is(':visible');
    var nivel = parseInt($(this).parent().attr('nivel'));
    var hasChildren = ($(this).next().find('.accordion').length >= 1) ? true : false;

    if (isVisibleBody) {
      $(this).next().slideUp('slow');
      $(this).next().find('.accordion-body').slideUp('slow');
      $(this).find('.icone').attr('src', DATA.icons[nivel].toOpen);
    } else {
      $(this).next().slideDown('slow');

      if (DATA.config.isCompressed){
        $(this).next().siblings('.accordion-body').slideUp('slow');
        $(this).next().siblings('.accordion-header').find('.icone').attr('src', DATA.icons[nivel].toOpen);
      }

      $(this).find('.icone').attr('src', DATA.icons[nivel].toClose);

      if (hasChildren)
        $(this).next().children().find('.icone').attr('src', DATA.icons[nivel + 1].toOpen);
    }
  });
};

