const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('SABIA QUE DIRIAS SI :D')
    alert('♥ ME HACES LA PERSONA MAS FELIZ DEL MUNDO ♥')
    alert('♥ TE QUIERO MUCHISIMO MI NIÑA ♥')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
const title = document.querySelector('.kawaii-title');

function getRandomColor() {
    const minHue = 330; // Tonalidad mínima (rosado)
    const maxHue = 360; // Tonalidad máxima (blanco)
    const saturation = Math.floor(Math.random() * 50) + 50; // Saturación (50-100%)
    const lightness = Math.floor(Math.random() * 30) + 70; // Claridad (70-100%)
    return `hsl(${Math.random() * (maxHue - minHue) + minHue}, ${saturation}%, ${lightness}%)`;
  }

  setInterval(function() {
    const color = getRandomColor();
    document.documentElement.style.setProperty('--twinkling-color', color);
  }, 2000);
