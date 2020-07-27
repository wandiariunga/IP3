
    $(document).ready(function(){

        $('#holder1').click(function(){
            $('#para1').toggle(1000);
            $('#btn1').toggle(1000);
            $('#card-text1').toggle(1000);
            $('#heada1').toggle(1000);
            $('#heada1').css('font-weight','bold');

         });

         $('#holder2').click(function(){
            $('#para2').toggle(1000);
            $('#btn2').toggle(1000);
            $('#card-text2').toggle(1000);
            $('#heada2').toggle(1000);
            $('#heada2').css('font-weight','bold');

         });

         $('#holder3').click(function(){
            $('#para3').toggle(1000);
            $('#btn3').toggle(1000);
            $('#card-text3').toggle(1000);
            $('#heada3').toggle(1000);
            $('#heada3').css('font-weight','bold');

         });
   
            var form = document.getElementById('name-form');
            form.onsubmit =function(e){
                e.preventDefault();
                var result = document.getElementById("result");
                alert(form.fullName.value + "  we have recieved your message. Thank you for reaching out to us");
                form.reset();
            };
    });