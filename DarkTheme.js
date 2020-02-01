var toggleSlider        = document.getElementById("darkTheme"),
    sidebar             = document.getElementById("sidebar"),
    menu                = document.getElementById("menu"),
    pusher              = document.getElementById("pusher"),
    nameHeader          = document.getElementById("nameHeader"),
    subHeader2          = document.getElementById("sub_header_2"),
    subHeader4          = document.getElementById("sub_header_4")
    body                = document.getElementById("body");
;  

toggleSlider.addEventListener("click", function(){
    sidebar.classList.toggle("inverted");
    menu.classList.toggle("inverted");    
    pusher.classList.toggle("darkifyPusher");
    nameHeader.classList.toggle("darkifyHeader");
    subHeader2.classList.toggle("darkifyHeader");
    subHeader4.classList.toggle("darkifyHeader");
    body.classList.toggle("darkifyPusher");
});