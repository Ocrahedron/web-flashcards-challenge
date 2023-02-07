const gameContainer = document.querySelector('.gameContainer');
// const card = document.querySelector('.card');
const p = document.querySelector('#p');
const buttonYes = document.querySelector('#yes');
const buttonNo = document.querySelector('#no');

gameContainer?.addEventListener('click', async (event) => {
  // event.preventDefault();
  // console.log(event.target.dataset.cardid)
  try {
    console.log(event.target);
    const { id, name } = event.target.dataset;
    console.log(id);
    console.log(name);
    const response = await fetch(`/game/:id/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });

    const result = await response.json();

    p.innerHTML = result.question;
    buttonYes.setAttribute('data-id', `${result.id}`);
    buttonNo.setAttribute('data-id', `${result.id}`);
 

  
  } catch (error) {
    console.log(error);
  }
});
