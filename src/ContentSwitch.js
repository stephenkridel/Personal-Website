// initializing an object that contains the first word of the div that needs its style changed and its correspoding link
var linksObject = { 
    initial         : document.getElementById("initialLink"),
    aboutMe         : document.getElementById("aboutMeLink"),
    resume          : document.getElementById("resumeLink"),
    coop            : document.getElementById("coopLink"),
    projects        : document.getElementById("projectsLink"),
    }
    // initializing an array with all of the link elements, and an array with all of the keys
    linkArray       = Object.values(linksObject),
    keyArray        = Object.keys(linksObject)
;

// function that outputs a key by using a corresponding value
function getKeyByValue(object, value) { 
    return Object.keys(object).find(key => object[key] === value); 
} 

// for loop that adds an event listener to all links
for(var i = 0; i < linkArray.length; i++){
    linkArray[i].addEventListener("click", function(){
        
        // capturing which link was clicked
        var clickedLink = this;
        // setting the key of the clicked link (i.e. the first word of the ID) + "Content" to a variable
        var clickedContent = getKeyByValue(linksObject, clickedLink) + "Content";

        // bouces the first card if in mobile to tell user they can click on the cards
        if(clickedContent == 'coopContent' && document.body.clientWidth <= 700){
            setTimeout(function(){
                $('#cardFall2019')
                    .transition({
                        animation: 'bounce',
                        duration: '1s'
                    });
                ;
            }, 500);
        };

        // making all masthead divs display = "none"
        for(var i = 0; i < linkArray.length; i++){
            document.getElementById(keyArray[i] + "Content").style.display = "none";
            // console.log("Deleted Style = " + keyArray[i] + "Content");
        };

        // console.log(clickedContent)
        // console.log(typeof clickedContent)
        // making the div corresponding to the clicked link equal to "flex"
        document.getElementById(clickedContent).style.display = "flex";

        $('.ui.left.vertical.menu.sidebar')
            .sidebar('hide')
        ;
    });
};
