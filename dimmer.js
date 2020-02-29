// creating an object that associates a card and its corresponding dimmer
var Fall2017Obj     = {container: document.getElementById("containerFall2017"), card: document.getElementById("cardFall2017"), dimmer: $('.Fall2017')},
    Sum2018Obj      = {container: document.getElementById("containerSum2018"), card: document.getElementById("cardSum2018"), dimmer: $('.Sum2018')},
    Spr2019Obj      = {container: document.getElementById("containerSpr2019"), card: document.getElementById("cardSpr2019"), dimmer: $('.Spr2019')},
    Fall2019Obj     = {container: document.getElementById("containerFall2019"), card: document.getElementById("cardFall2019"), dimmer: $('.Fall2019')},
    // yeah I know "why did you use jquery AND vanilla js!?"" Well I couldn't get it to work with using querySelector...
    // ...to capture the dimmer element and then use the semantic ui method 'dimmer' on it. Oh well.
    
    coopContent     = document.getElementById('coopContent');
    container       = document.getElementsByClassName('dimmer container'),
    objArray        = [Fall2017Obj, Sum2018Obj, Spr2019Obj, Fall2019Obj]
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

for(i = 0; i < objArray.length; i++){
    // adding an event listener to every card
    objArray[i].card.addEventListener("click", function(){

        // undimming every card
        for(i = 0; i < objArray.length; i++){
            objArray[i].dimmer.dimmer('hide');
        };
        // dimming the card that is clicked
        clickedDimmer = getDimmerByCard(objArray, this);
        clickedDimmer.dimmer.dimmer('show');
    });
};

function unDim (){
    setTimeout(function(){
        for(i = 0; i < objArray.length; i++){
            if(objArray[i].container.classList.contains('dimmed')){
                objArray[i].container.style.display = "inherit";
            } else {
                objArray[i].container.style.display = "none";
            };
        };
        console.log('check')
    }, 100)
};

coopContent.addEventListener('click', unDim);
coopContent.addEventListener('touchstart', unDim);

for(i = 0; i < objArray.length; i++){
    objArray[i].container.addEventListener('mouseover', unDim);
};