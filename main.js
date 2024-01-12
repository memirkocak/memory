import './style.css'

const cartes = document.querySelectorAll('.card');

let choix1 = "";

for(let i = 0; i<cartes.length; i++){
  cartes[i].addEventListener('click',()=>{
    cartes[i].style.backgroundColor = "aqua"
    if(choix1 == ""){
      choix1 = i;
    } else if(cartes[choix1].textContent == cartes[i].textContent) {
      console.log('pair');
    }
    console.log(choix1);
  });
};

