import './style.css'

const cartes = document.querySelectorAll('.card');

let choix1 = "";

for (let i = 0; i <= cartes.length; i++) {
  cartes[i].addEventListener('click', () => {
    cartes[i].style.backgroundColor = "aqua";
    if (choix1 === ""){
      choix1 = i;
    } else if (cartes[choix1].getAttribute("data-key") === cartes[i].getAttribute("data-key")) {
      console.log('pair');
      cartes[choix1].style.backgroundColor = 'aqua';
      cartes[i].style.backgroundColor = 'aqua';
      choix1 = '';
    }
    else {
      setTimeout(() => {
        cartes[choix1].style.backgroundColor = 'black';
        cartes[i].style.backgroundColor = 'black';
        choix1 = '';
      }, 1000);
      
    }
    console.log(choix1);
  });
};

