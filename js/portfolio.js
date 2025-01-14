function openModal(imgElement) {
    // Mostrar el modal
    var modal = document.getElementById("myModal");
    // el que se mostrará cuando se abra el modal
    var modalImg = document.getElementById("img01");
    var caption = document.getElementById("caption");

    // Establecer la imagen del modal
    //cabia a display blok
    modal.style.display = "block";
    //que el tamaño sea el mismo
    modalImg.src = imgElement.src;
    
    caption.innerHTML = imgElement.alt;
}
//para cerrarlo
function closeModal() {
    //obterne el elemento
    var modal = document.getElementById("myModal");
    // que se oculte
    modal.style.display = "none";
}
