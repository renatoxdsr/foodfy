

const modalOverlay = document.querySelector('.modaloverlay');
const cards = document.querySelectorAll('.viewed-card');

for (let card of cards) {
    card.addEventListener("click", function () {
      recipeId = card.getAttribute('id');
  
      window.location.href = `/recipe/${recipeId}`;
    });
  }
  
  const content = document.querySelector('#container');
  const buttons = content.querySelectorAll('a');
  const lists = content.querySelectorAll('.list');
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      if (lists[i].classList.contains("hidden")) {
        lists[i].classList.remove("hidden");
        buttons[i].innerHTML = "ESCONDER";
      } else {
        lists[i].classList.add("hidden");
        buttons[i].innerHTML = "MOSTRAR";
      }
    });
  }
