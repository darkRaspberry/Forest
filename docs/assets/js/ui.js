/*!
 *  v0.1-alpha.GitHub
 * Copyright 2020 darkRaspberry
 * Licensed under GPL-3.0 (https://github.com/darkRaspberry/Forest/blob/master/LICENSE)
 */
$(document).ready(function(){//gatewayBox
  $('.gatewayBox').mouseenter(function(){
    $(this).css({ transform:'scale(0.9)'});
  });
  $('.gatewayBox').mouseleave(function(){
    $(this).css({ transform:'scale(1)'});
  });
  $('.headline').click(function(){
    $(this).text('Forest <:');
  });
    //gatewayHeart
  $('.gatewayHeart').mouseenter(function(){
    $(this).text('❤️ <:');
    $(this).css({ transform:'scale(0.8)'});
  });
  $('.gatewayHeart').mouseleave(function(){
    $(this).text('❤️');
    $(this).css({ transform:'scale(1)'});
  });
});

/*Static Height Test only */
/*Height Test*/
var height = (window.innerHeight > 0) ? window.innerHeight : screen.Height;if(height<300){alert("Device is too small to work correctly. Please maintain least height of 300px");console.log("Height test working.");}
/*Width Test*/
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;if((width<300)){alert("Device is too small to work correctly. Please maintain least width of 250px");console.log("Width test Working");}
/*Output as Width & Height*/console.log(width);console.log(height);