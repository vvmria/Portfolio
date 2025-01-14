function openModal(imgElement) {
    // Mostrar el modal
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var caption = document.getElementById("caption");

    // Establecer la imagen del modal
    modal.style.display = "block";
    modalImg.src = imgElement.src;
    caption.innerHTML = imgElement.alt;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
