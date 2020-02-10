// declaring the three bar icon as a variable
var sidebarIcon = document.getElementById("sidebarIcon");

// calling a Semantic Ui function to open the menu/navbar when sidebarIcon is clicked
sidebarIcon.addEventListener('click', function (){
    $('.ui.left.vertical.menu.sidebar')
    .sidebar('toggle');
});