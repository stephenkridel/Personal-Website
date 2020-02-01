// declaring the three bar icon as a variable
var sidebarIcon = document.getElementById("sidebarIcon");

// calling a Semantic Ui function to open the menu/navbar when sidebarIcon is clicked
sidebarIcon.addEventListener('click', function (){
    $('.ui.left.vertical.menu.sidebar')
    .sidebar('toggle');
});

// changing the three bar icon's color when the mouse is hovered over it
sidebarIcon.addEventListener('mouseenter', function(){
    sidebarIcon.style.color = "grey";
});
sidebarIcon.addEventListener('mouseleave', function(){
    sidebarIcon.style.color = "black";
});