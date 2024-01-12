import './style.css'

const cartes = document.querySelectorAll('.card');

let choix1;

let choix2;

for(let i = 0; i<cartes.length; i++){
  cartes[i].addEventListener('click',()=>{
    cartes[i].style.backgroundColor = "aqua"

  });
};


