const gameContainer = document.querySelector('.gameContainer');
// const { Card } = require('../../db/models');

gameContainer.addEventListener('click', async (event) => {
  event.preventDefault();

  try {
    console.log(event.target.name);
    // const { id } = event.target;

    // const response = await fetch(`/game/${id}`, {
    //   method: 'GET',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(),
    // });
  } catch (error) {
    console.log(error);
  }

  // const findAllCards = await Card.findAll({ where: { deck_id: id }, raw: true });
});
