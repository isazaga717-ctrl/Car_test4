// Подгрузка карточек авто
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('vehicles');
  if (!container) return;

  vehicles.forEach(vehicle => {
    const card = document.createElement('div');
    card.className = 'vehicle-card';
    card.innerHTML = `
      <img src="${vehicle.image}" alt="${vehicle.title}" loading="lazy">
      <div class="vehicle-info">
        <h3>${vehicle.title}</h3>
        <p class="passengers">${vehicle.passengers}</p>
        <p class="models">${vehicle.models}</p>
      </div>
    `;
    container.appendChild(card);
  });
});