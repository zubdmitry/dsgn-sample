var a = $('.wrapper').height(); //получаем высоту прямоугольника
var b = $('.wrapper').width(); // ...и его ширину

var d = Math.sqrt(a*a+b*b); //высчитываем диагональ

var sin = a/d; //...синус угла между диагональню и стороной

var deg = Math.asin(sin) * (180/Math.PI); //...угол

 $('.inner').css({
    'width': d, //задаём длину диагонали
    'transform': 'rotate('+deg+'deg)' //...и угол наклона при первой загрузке страницы
  });

$(window).resize(function() { //меняем параметры при изменении размеров экрана

  b = $('.wrapper').width();

  d = Math.sqrt(a*a+b*b);

  sin = a/d;

  deg = Math.asin(sin) * (180/Math.PI);


  $('.inner').css({
    'width': d,
    'transform': 'rotate('+deg+'deg)'
  });

});