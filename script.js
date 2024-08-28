function filtrarProductos(categoria) {
    var productos = document.getElementsByClassName('producto');
    
    for (var i = 0; i < productos.length; i++) {
        if (categoria === 'todos') {
            productos[i].style.display = 'block';
        } else {
            if (productos[i].classList.contains(categoria)) {
                productos[i].style.display = 'block';
            } else {
                productos[i].style.display = 'none';
            }
        }
    }
}