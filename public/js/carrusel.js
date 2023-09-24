$(document).ready(function() {
    var currentIndex = 0;
    var slides = $('.slide');
    var slideCount = slides.length;
    var interval = 5000; // Cambia de imagen cada 5 segundos
    var timer;
  
    // Función para mostrar el siguiente slide
    function showNextSlide() {
      $(slides[currentIndex]).hide();
      currentIndex = (currentIndex + 1) % slideCount;
      $(slides[currentIndex]).fadeIn();
    }
  
    // Función para mostrar el slide anterior
    function showPrevSlide() {
      $(slides[currentIndex]).hide();
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      $(slides[currentIndex]).fadeIn();
    }
  
    // Control de botones "Anterior" y "Siguiente"
    $('#prev').click(function() {
      clearInterval(timer); // Detener el temporizador al hacer clic manualmente
      showPrevSlide();
      startTimer(); // Reiniciar el temporizador
    });
  
    $('#next').click(function() {
      clearInterval(timer);
      showNextSlide();
      startTimer();
    });
  
    // Función para iniciar el temporizador
    function startTimer() {
      timer = setInterval(function() {
        showNextSlide();
      }, interval);
    }
  
    // Iniciar el temporizador al cargar la página
    startTimer();
  });
  