const buttonBar = document.querySelector('.button-bar');
let curColor;
// Add your code here

buttonBar.addEventListener('click', (e) => {
  if (e.target.tagName == 'BUTTON') {
    curColor = e.target.getAttribute('data-color');
  }
  if (e.currentTarget.tagName == 'DIV') {
    console.log(`color ${curColor}`);
  }
});
