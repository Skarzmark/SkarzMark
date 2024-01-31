document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
  
    menuToggle.addEventListener('click', function () {
      menu.classList.toggle('active');
    });
  
    let isTouching = false;
    let touchStartX = 0;
    let touchCurrentX = 0;
  
    document.addEventListener('touchstart', function (event) {
      isTouching = true;
      touchStartX = event.touches[0].clientX;
    });
  
    document.addEventListener('touchmove', function (event) {
      if (!isTouching) return;
      touchCurrentX = event.touches[0].clientX;
    });
  
    document.addEventListener('touchend', function () {
      if (!isTouching) return;
  
      isTouching = false;
  
      // Calculer la distance parcourue lors du balayage
      const swipeDistance = touchStartX - touchCurrentX;
  
      // Si la distance est suffisamment importante, activer/désactiver la barre de menu
      if (Math.abs(swipeDistance) > 50) {
        menu.classList.toggle('active');
      }
  
      // Réinitialiser les valeurs de la touche
      touchStartX = 0;
      touchCurrentX = 0;
    });
  });
  
