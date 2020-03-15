var toggleSlider        = document.getElementById("darkThemeToggler"),
    sidebar             = document.getElementById("sidebar"),
    menu                = document.getElementById("menu"),
    pusher              = document.getElementById("pusher"),
    nameHeader          = document.getElementById("nameHeader"),
    subHeader2          = document.getElementById("sub_header_2"),
    subHeader4          = document.getElementById("sub_header_4"),
    body                = document.querySelector("body"),
    aboutMeHeader       = document.getElementById("aboutMeHeader"),
    bottomBar           = document.getElementById("bottomBar"),
    darkLabel           = document.getElementById("darkLabel")
;  

// checks if the toggler is checked when the DOM loads and toggles dark theme if it is
document.addEventListener("DOMContentLoaded", function(){
    checked = $('.ui.checkbox.toggle input').is(':checked');
    // console.log(checked);
    if (checked) {
        toggleDarkThemes()
    }
    else {
    }
});

// toggles dark theme when toggler is clicked
toggleSlider.addEventListener("click", toggleDarkThemes);

// function that assigns appropriate classes
function toggleDarkThemes(){
    sidebar.classList.toggle("inverted");
    menu.classList.toggle("inverted");   
    pusher.classList.toggle("darkifyPusher");
    nameHeader.classList.toggle("darkifyHeader");
    subHeader2.classList.toggle("darkifyHeader");
    subHeader4.classList.toggle("darkifyHeader");
    body.classList.toggle("darkifyPusher");
    aboutMeHeader.classList.toggle("darkifyPortraitHeader");
    darkLabel.classList.toggle("darkText");

    checked = $('.ui.checkbox.toggle input').is(':checked');
    // console.log(checked);
    if (checked) {
        darkLabel.textContent = "";
    }
    else {
        darkLabel.textContent = "Dark Theme";
    }
};
