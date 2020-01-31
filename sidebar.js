var sidebarIcon = document.getElementById("sidebarIcon");

sidebarIcon.addEventListener('click', function (){
    $('.ui.left.vertical.menu.sidebar')
    .sidebar('toggle');
});

alert("working")