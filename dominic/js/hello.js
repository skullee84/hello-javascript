function add(){
  var total = 0;

  return function() {
    total++;
  }
}
window.addEventListener('click', add());

var arr = [1..10];
var newArr = [];
for(var i = 0; i < arr.lengh ; i++){
  newArr[i] = (function(n){
    return function() {
      console.log(arr[n]);
    }
  })(i);
}

function urlMaker(host) {
  return function(path) {
    return host + path;
  }
};

var daum = urlMaker('www.daum.net');
daumCafe = daum('/cafe');

var google = urlMaker('www.google.co.kr');
var googlePhoto = google('/photo');

var Person = function(name){
  this.name = name;
}

Person.prototype.walk = function() {
  console.log(this.name + " walked");
}

var dominic = new Person('dominic');
dominic.walk();
