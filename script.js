const dynamicButton = document.getElementById('dynamic-button');
const map = document.querySelector('.map');

window.addEventListener('resize', positionDynamicButton);
window.addEventListener('load', positionDynamicButton);

function positionDynamicButton() {
  const mapRect = map.getBoundingClientRect();
  const offsetX = 200; // Adjust based on your background
  const offsetY = 100; // Adjust based on your background
  
  const buttonX = mapRect.left + offsetX;
  const buttonY = mapRect.top + offsetY;

  dynamicButton.style.left = `${buttonX}px`;
  dynamicButton.style.top = `${buttonY}px`;
}

dynamicButton.addEventListener('mouseover', () => {
  dynamicButton.innerHTML = 'aaaa';
});

dynamicButton.addEventListener('mouseout', () => {
  dynamicButton.innerHTML = '';
});
