document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.getElementById("prevBtn");
  const nextButton = document.getElementById("nextBtn");
  const carouselImages = document.getElementById("carouselImages");
  const totalImages = carouselImages.children.length;
  let currentIndex = 0;

  // Función para mostrar la imagen actual
  function updateCarousel() {
    const offset = -currentIndex * 100; // Desplazamiento en porcentaje
    carouselImages.style.transform = `translateX(${offset}%)`; // Aplica el desplazamiento
  }

  // Botón "prev"
  prevButton.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1; // Desplazarse atrás
    updateCarousel();
  });

  // Botón "next"
  nextButton.addEventListener("click", () => {
    currentIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1; // Desplazarse adelante
    updateCarousel();
  });

  // Avanza a la siguiente imagen cada 5 segundos
  setInterval(() => {
    currentIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;
    updateCarousel();
  }, 5000);
});
