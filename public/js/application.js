const cardContainer = document.querySelector('.container');

cardContainer.addEventListener('click', (event) => {
  console.log(event.target.id);
});
