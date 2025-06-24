function toggleMenu() {
  var menu = document.getElementById("menuCategorias");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Cierra el menú si se hace clic fuera del botón
window.onclick = function(event) {
  if (!event.target.matches('.btn-categorias')) {
    var menu = document.getElementById("menuCategorias");
    if (menu && menu.style.display === "block") {
      menu.style.display = "none";
    }
  }
}
