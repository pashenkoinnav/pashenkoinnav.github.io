$(function () {
	var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');

    var pixelsOffset = 125;
    var currentLeftValue =0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 4) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.click(function() {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 125;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }else {
					currentLeftValue -= 125*12;
        	elementsList.animate({ left : currentLeftValue + "px"},0);
					currentLeftValue += 125;
        	elementsList.animate({ left : currentLeftValue + "px"},500);
        }
    });

    rightUIEl.click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 125;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
					}else {
						currentLeftValue += 125*12;
	        	elementsList.animate({ left : currentLeftValue + "px"},0);
						currentLeftValue -= 125;
	        	elementsList.animate({ left : currentLeftValue + "px"},500);
	        }
    });

});