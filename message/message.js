var paths = document.getElementsByTagName('path'),
    stroke = 'stroke',
    animate = 'animate',
    nooffset = 'no-offset';

var isSafari = /constructor/i.test(window.HTMLElement);

if (isSafari){
  for (var x = 0; x < paths.length; x++){
    paths[x].classList.add(nooffset);
  }
}

setTimeout( function(){
  for (var x = 0; x < paths.length; x++){
    paths[x].classList.add(stroke);
    paths[x].classList.add(animate);
  }
}, 1000);