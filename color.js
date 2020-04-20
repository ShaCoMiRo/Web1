var Body = {
  setbodyColor:function(color) {
    $('body').css('color', color); //모든 body 태그를 JQuery로 통제하겠다는 선언.
  },
  setbodybackgroundColor:function(color) {
    $('body').css('backgroundColor', color);
    //모든 body 태그를 JQuery로 통제하겠다는 선언.
  }
}
var Link = {
  setlinkColor:function (color) {
  $('a').css('color', color); //모든 a 태그를 JQuery로 통제하겠다는 선언.
  }
}
function nightdayHandler(self) {
  if(self.value  === 'day') {
    Body.setbodybackgroundColor('#111111')
    Body.setbodyColor('white');
    Link.setlinkColor('orange');
    self.value = 'night';
  } else {
    Body.setbodybackgroundColor('#FFFFFF');
    Body.setbodyColor('black');
    Link.setlinkColor('blue');
    self.value = 'day';
  }
}
