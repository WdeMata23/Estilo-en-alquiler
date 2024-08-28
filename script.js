function filtrarProductos(categoria) {
    var productos = document.getElementsByClassName('producto');

    for (var i = 0; i < productos.length; i++) {
        if (productos[i].classList.contains(categoria)) {
            productos[i].style.display = 'block';
        } else {
            productos[i].style.display = 'none';
        }
    }
}