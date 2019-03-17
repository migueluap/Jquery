$(document).ready(function(){
	// $('h2.accordion').click(function(){
	// 	$(this).parent().find('div.accordion').slideToggle("slow");
    // });



    // $(function() { 
    //     $( "#accordion" ).accordion({            
    //         active: false,
    //         autoHeight: false,
    //         collapsible: true           
    //     }); 
    //     $( ".subaccordion" ).accordion({            
    //         active: false,
    //         autoHeight: false,
    //         collapsible: true           
    //     }); 
    // });
    


    $('.toggle').click(function(e) {
        e.preventDefault();
    
      var $this = $(this);
    
      if ($this.next().hasClass('show')) {
          $this.next().removeClass('show');
          $this.next().slideUp(350);
      } else {
          $this.parent().parent().find('li .inner').removeClass('show');
          $this.parent().parent().find('li .inner').slideUp(350);
          $this.next().toggleClass('show');
          $this.next().slideToggle(350);
      }
  });
});



