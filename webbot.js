var hasScrolled = false;
var hasShown = false;

$(document).on('mouseleave',showWebBot);
$(window).on('scroll',updateHasScrolled);

function updateHasScrolled() {
   if($(window).scrollTop() + $(window).height() > $(document).height() / 2) {
       hasScrolled = true;
   }
}
function showWebBot(){
    if( event.clientY < 0 && hasScrolled == true && hasShown == false){
        $('#webbot').load("webbot.html",function(){
            $('.webbot.msg-box').on("submit",function(event){
                event.preventDefault();
                $('.webbot-conversion').append('<div class="webbot msg msg-user"><p>' + $('.webbot.msg-input').val() + '</p></div>');
                $('.webbot-conversion').trigger(":reset");
                $('.webbot-conversion').append('<div class="webbot msg msg-bot"><p>Sorry, I am not sure how to reply to that :s</p></div>');
            });
            $('#webot-close').on('click',function(){
                $('#webbot').empty();
            });
        });
        hasShown = true;
    }
}

