// creating an object that associates a card and its corresponding dimmer
var Fall2017Obj     = {container: document.getElementById("containerFall2017"), card: document.getElementById("cardFall2017")},
    Sum2018Obj      = {container: document.getElementById("containerSum2018"), card: document.getElementById("cardSum2018")},
    Spr2019Obj      = {container: document.getElementById("containerSpr2019"), card: document.getElementById("cardSpr2019")},
    Fall2019Obj     = {container: document.getElementById("containerFall2019"), card: document.getElementById("cardFall2019")},
    
    // an array of each object to allow looping through
    objArray        = [Fall2017Obj, Sum2018Obj, Spr2019Obj, Fall2019Obj],

    // the class each dimmer has. Starts out with Display: none because it overlays the rest of the content.
    container       = document.getElementsByClassName('dimmer container'),

    // the button element that appears when a dimmer is activated and allows you to run hideDimmer()
    closeButton     = document.getElementsByClassName('big close icon')
;

// function that allows you to easily find a card's corresponding dimmer by inputting an array and the dimmer's card
function getDimmerByCard(array, card){
    for(i = 0; i < array.length; i++){
        if(array[i].card === card){
            var neededDimmer = array[i];
        };
    };
    return neededDimmer;
};

// function that allows closure of dimmer
function hideDimmer(){
    for(i = 0; i < objArray.length; i++){
        closeButton[i].addEventListener('click', function(){
            clickedDimmer.container.style.display = 'none';
        });
    };
};

// function that fades in dimmer
function showDimmer(){
    for(i = 0; i < objArray.length; i++){
        objArray[i].card.addEventListener("click", function(){
            // dimming the card that is clicked

            clickedDimmer = getDimmerByCard(objArray, this);

            // this block increases the opacity of the container by 0.025 each step until its 1. (Background-color is rgba(0,0,0,0.9))
            var op = 0.1;  // initial opacity
            var timer = setInterval(function () {
                if (op >= 1){
                    clearInterval(timer);
                }
                clickedDimmer.container.style.display = 'flex';
                clickedDimmer.container.style.opacity = op
                op += 0.025;
            }, 2.5);

        });
    };
};

showDimmer();

hideDimmer();