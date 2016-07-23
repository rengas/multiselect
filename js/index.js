$(document).ready(function(){
  
    // on hover event on option color
    $("option").hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "");
    });
  
   // on click event on option
    $( "option" ).click(function(){
      // on click deselect and make font bold
      $("option:selected").prop("selected", false)
                          .css({"background-color": "",
                                 "font-weight": "bold"
                                });
      
      // show alertbox
       var alertbox = confirm($(this).val());
       if (alertbox) {
              $( "option" ).css({"background-color": "",
                                 "font-weight": "normal"
                                });     
          } 

    });
   
  
});