document.addEventListener('DOMContentLoaded', function () {
    const paragraphs = document.querySelectorAll('.content .rainbow-text');
  
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let currentColorIndex = 0;
  
    function changeColor() {
      for (const paragraph of paragraphs) {
        paragraph.style.color = colors[currentColorIndex];
      }
      currentColorIndex = (currentColorIndex + 1) % colors.length;
    }
  
    setInterval(changeColor, 200); // Muda a cor a cada 0,1 segundos (100 milissegundos)
  });