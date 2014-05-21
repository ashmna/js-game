$(function(){
    var game = new Game();
    game.newGame();
    var imgArray =  ["image/BigEyes",
        "image/Black",
        "image/BlackPower",
        "image/Blue",
        "image/Brown",
        "image/Green",
        "image/Orange",
        "image/Pink",
        "image/Red",
        "image/Tentacles",
        "image/Tie",
        "image/White",
        "image/BigEyes",
        "image/Black",
        "image/BlackPower",
        "image/Blue",
        "image/Brown",
        "image/Green",
        "image/Orange",
        "image/Pink",
        "image/Red",
        "image/Tentacles",
        "image/Tie",
        "image/White"
    ];

   for(i = 0; i < imgArray.length; i++) {
       var src = imgArray[i] + ".png";

       if (i >= 1) {

           $('img').addClass('img' + i);

           $(".img + i").removeClass('img' + i--);
           if ($('img').hasClass('img' + i)) {
            //        alert('in if');
               $(".img+i").attr('src', src);

           //    break;

           }
       }

       else {

           $("img").addClass('img' + i);
           $(".img+i").attr('src', src);
       }
   }

});
