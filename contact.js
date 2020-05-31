$(document).ready(function(){
    $("#sendmail").validate({
        rules:{
            nme: {
                required: true,
                minlength:2
                        
                },
            mail: {
                required: true,
                email :true
                
                
                },
                cmt: {
                    required: true,
                    minlength:20
                   
                    
                    
                }

        }
 
    })
    
})

  
