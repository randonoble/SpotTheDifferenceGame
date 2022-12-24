$(function(){
    $('#fx').click(function(e){
      var x = e.clientX;
      var y = e.clientY;
      
      var circle=$('<div class="circle"></div>');
           circle.css('top',e.pageY - 15);
           circle.css('left',e.pageX - 15)
           $('#fx').append(circle);
    })
  })
