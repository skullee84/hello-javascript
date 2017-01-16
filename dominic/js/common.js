function SliderController(data) {
  this.currentIdx = 0;
  this.target = data.target;
  this.images = data.images;
};

SliderController.prototype.confirmIdx = function(period) {
  this.currentIdx += period;
  var max = this.images.length - 1;

  if(this.currentIdx < 0) this.currentIdx = max;
  if(this.currentIdx > max) this.currentIdx = 0;
}

SliderController.prototype.imageChange = function() {
  $(this.target).attr('src', this.images[this.currentIdx]);
}

SliderController.prototype.bindAnimate = function(animationName) {
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  $(this.target).addClass('animated ' + animationName)
  .one(animationEnd, function() {
    $(this).removeClass('animated ' + animationName);
  });
}

SliderController.prototype.prev = function() {
  this.confirmIdx(-1);
  this.imageChange();
  this.bindAnimate('bounceInRight');
}

SliderController.prototype.next = function() {
  this.confirmIdx(1);
  this.imageChange();
  this.bindAnimate('bounceInLeft');
}
