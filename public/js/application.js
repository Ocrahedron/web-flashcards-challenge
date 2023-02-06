const gameContainer = document.querySelector('.gameContainer');
// const { Card } = require('../../db/models');

gameContainer.addEventListener('click', async (event) => {
  event.preventDefault();

  try {
    // console.log(event.target.name);
    const { id, name } = event.target;
    console.log(id);
    console.log(name);
    const response = await fetch(`/game/:id/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    if (response.status === 200) {
      const result = await response.json();

      // console.log(result);

      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('id', `${result.id}`);

      card.innerHTML = `
    <p>${result.question}</p>
    <button id=${result.id} name="да" type="button">Да</button>
    <button id=${result.id} name="нет" type="button">Нет</button>
    `;
      gameContainer.appendChild(card);
    }
  } catch (error) {
    console.log(error);
  }
});
