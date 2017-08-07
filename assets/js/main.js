
window.addEventListener('scroll', function () {
  const distanciaVertical = window.pageYOffset || document.documentElement.scrollTop,
  header = document.getElementById('header');
  
  if (distanciaVertical > 500) {
    header.classList.add("navbar-color");
  } else {
    header.classList.remove("navbar-color");
  }
});

