// Proyecto 1

const proyecto1 = {
    videosrc: 'resources/videos/Projects/Cascada.mp4',
    titulo: 'Tienda de ropa',
    texto: 'Bienvenidos a nuestra tienda de ropa en línea. Ofrecemos una amplia variedad de estilos y marcas a precios asequibles. Desde ropa casual hasta trajes de gala, tenemos todo lo que necesita para su guardarropa. Además, ofrecemos envío gratuito en pedidos superiores a $50 y aceptamos devoluciones dentro de los 30 días posteriores a la compra. Echa un vistazo a nuestras últimas colecciones y descubre tu estilo único hoy mismo.',
    images: ['resources/images/Projects/Tuerca.png', 'resources/images/Projects/Tuerca.png', 'resources/images/Projects/Tuerca.png']
};
  
const proyecto2 = {
    videosrc: 'resources/videos/Projects/Cascada.mp4',
    titulo: 'Aplicación de productividad',
    texto: '¿Te sientes abrumado por tu lista interminable de tareas pendientes? ¡No te preocupes más! Nuestra aplicación de productividad es la herramienta perfecta para ayudarte a organizar tu día y alcanzar tus metas. Con características como la creación de listas de tareas personalizadas, recordatorios y estadísticas de seguimiento, nunca te sentirás desorganizado de nuevo. ¡Descarga nuestra aplicación y experimenta una vida más organizada y menos estresante!',
    images: ['resources/images/Projects/Tuerca.png', 'resources/images/Projects/Tuerca.png', 'resources/images/Projects/Tuerca.png']
};

const imageContainers = document.querySelectorAll('.image-container');
var ventana = document.querySelector('.ventana-emergente');
var dentro = false;

imageContainers.forEach(container => {
  const img = container.querySelector('img');
  const video = container.querySelector('video');

  container.addEventListener('mouseleave', () => {
    img.style.display = 'block';
    video.currentTime = 0;
    video.pause();
    video.style.display = 'none';
  });

  container.addEventListener('mouseenter', () => {
    video.style.display = 'block';
    video.play();
  });
});

function abrirVentana(videoSrc, texto) {
    
    var video = ventana.querySelector('video');
    var titulo = ventana.querySelector('h1');
    var descripcion = ventana.querySelector('p');
    var imagenes = ventana.querySelectorAll('img');
    

    video.src = videoSrc;
    descripcion.textContent = texto;
    
    ventana.style.display = 'flex';
    video.play();
    
}

document.addEventListener('click', function(e) {
    if (dentro == false) {
        ventana.style.display = 'none';
        video.pause();
    }
});

// Registramos el evento de movimiento del ratón
document.addEventListener('mousemove', function(event) {
  const {clientX, clientY} = event;
  const {innerWidth, innerHeight} = window;

  // Comprobamos si el cursor está en la región superior
  if (clientY < innerHeight * 0.1) {
    dentro = false;
  }
  // Comprobamos si el cursor está en la región inferior
  else if (clientY > innerHeight * 0.9) {
    dentro = false;
  }
  // Comprobamos si el cursor está en la región izquierda
  else if (clientX < innerWidth * 0.1) {
    dentro = false;
  }
  // Comprobamos si el cursor está en la región derecha
  else if (clientX > innerWidth * 0.9) {
    dentro = false;
  }
  // Si el cursor no está en ninguna de las regiones anteriores, la variable global se mantiene igual
  else {
    dentro = true;
  }
});

    
  


