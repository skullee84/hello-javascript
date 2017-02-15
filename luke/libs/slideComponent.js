/**
 * Created by luke on 2017. 2. 14..
 */
(function(exports) {
    var Slide = exports.Slide = function SlideComponent(slide, options) {

        var slideList = slide;
        var options = options;
        var direction = options.slideDirection;

        function moveList() {
            var tgPoint;
            if(direction === "vertical") {
                tgPoint = slideList.firstElementChild.offsetHeight * -1;
                setTagStyle(slideList, {
                    "webkitTransition" : options.slideSpeed + "s",
                    "webkitTransform" : 'translateY(' + tgPoint + 'px)'
                });
            } else {
                tgPoint = slideList.firstElementChild.offsetWidth * -1;
                setTagStyle(slideList, {
                    "webkitTransition" : options.slideSpeed + "s",
                    "webkitTransform" : 'translateX(' + tgPoint + 'px)'
                });
            }
        }

        function transitionCompleteHandler() {

            var tgElement = slideList.firstElementChild;

            slideList.removeChild(tgElement);
            slideList.appendChild(tgElement);

            if(direction === "vertical") {
                setTagStyle(slideList, {
                    "webkitTransition" : "0s",
                    "webkitTransform" : 'translateY(0px)'
                });
            } else {
                setTagStyle(slideList, {
                    "webkitTransition" : "0s",
                    "webkitTransform" : 'translateX(0px)'
                });
            }

        }

        function setTagStyle(element, styles) {
            for(var key in styles) {
                element.style[key] = styles[key];
            }
        }

        slideList.addEventListener('transitionend', transitionCompleteHandler);
        setInterval(moveList, options.slideDelay);
    }

    Slide.prototype.update = function() {
       console.log("update fn");
    }
}(window));