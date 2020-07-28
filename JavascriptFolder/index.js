

  var UIcontroler = ( function() {

      var btnclick,inputocus;

      return{

        changeinput:function() {
            
            btnclick = document.querySelector('.image_search').addEventListener('click',function(){

            inputocus = document.querySelector('.input_type_search').focus();
       
             });
        } 
      }
  })(); 

  UIcontroler.changeinput();