function choseColor(){
    var colours = Array('bg-color-grayLight','bg-color-gray','bg-color-darken','bg-color-blueDark','bg-color-blue','bg-color-greenDark','bg-color-purple');
    var cl = colours[Math.floor(Math.random()*colours.length)];
    return cl;
}


function init(){
  $('.odd').removeClass('entrance1');
  $('.even').removeClass('entrance1');

  $('.even').removeClass('emphasis2');
  $('.odd').removeClass('emphasis1');

  $('.odd').removeClass('exit1');
  $('.even').removeClass('exit1');
  
 
  
}

function animate(){
  init();

  var a = choseColor();
  var b = choseColor();
   

  setTimeout(function(){
  $('.odd').addClass(a);
  $('.even').addClass(b);
 
   $('.odd').addClass('entrance1');
  },2000);

  setTimeout(function(){
    $('.even').addClass('entrance1');
  },2000);

 //emphasize
  setTimeout(function(){
    $('.odd').addClass('emphasis1');
  },4000);
  setTimeout(function(){
    $('.even').addClass('emphasis2');
  },4000);

 //exit
  setTimeout(function(){
    $('.even').addClass('exit1');
    $('.odd').addClass('exit1');
    $('.odd').removeClass(a);
  $('.even').removeClass(b);
  },6000);  
  

}

$(document).ready(function(){
 
  setInterval(animate,8000);
});