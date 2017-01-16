
function Person(name){
  this.name = name;
};

Person.prototype.walk = function() {
  console.log(this.name + " walked");
};

var dominic = new Person('dominic');
dominic.walk();

var dia = new Person('dia');
dia.walk();

var jude = new Person('jude');
jude.walk();
