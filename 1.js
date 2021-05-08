 $(function(){
     $(".xuong,.kn,.sp,.tt").click(function(){
         $('body,html').animate({scrollTop:$('#khoiedu').offset().top},800)
     })
     $(".cm").click(function(){
        $('body,html').animate({scrollTop:$('#phanhoi').offset().top},800)
    })
})  
 