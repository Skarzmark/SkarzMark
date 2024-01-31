document.addEventListener("DOMContentLoaded", function () {
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');
    var closeBtn = document.createElement('div'); // Créer le bouton Fermer
  
    menuToggle.addEventListener('click', function () {
      menu.classList.toggle('active');
    });
  
    menu.addEventListener('click', function () {
      menu.classList.remove('active');
    });
  
    closeBtn.innerHTML = '&#10006;'; // Utiliser le caractère "X" pour le bouton Fermer
    closeBtn.classList.add('close-btn');
    closeBtn.addEventListener('click', function () {
      menu.classList.remove('active');
    });
  
    menu.appendChild(closeBtn); // Ajouter le bouton Fermer au menu
  });
  
