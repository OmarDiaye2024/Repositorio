const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("imgAmpliada");
const cerrar = document.querySelector(".cerrar");

document.querySelectorAll(".galeria img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

cerrar.onclick = () => modal.style.display = "none";

modal.onclick = e => {
    if (e.target === modal) modal.style.display = "none";
};

document.addEventListener("keydown", e => {
    if (e.key === "Escape") modal.style.display = "none";
});


// INDEX
let menuVisible = false;
const nav = document.getElementById("nav");

function mostrarOcultarMenu() {
    menuVisible = !menuVisible;
    nav.style.display = menuVisible ? "block" : "none";
}

function seleccionar() {
    nav.style.display = "none";
    menuVisible = false;
}

