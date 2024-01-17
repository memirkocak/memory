import './style.css'

const cartes = document.querySelectorAll('.card');
let flag = false;
let choix1 = "";
// let lesdivs = document.querySelectorAll('div')

function random(arr){
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
const stockarr = random([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8])
console.log(stockarr);


for (let i = 0; i < cartes.length; i++) {
  cartes[i].textContent = stockarr[i];
  cartes[i].addEventListener('click', () => {
    
    // lesdivs = random;
    if(flag == false) {
      cartes[i].style.backgroundColor = "aqua";
      if (choix1 === ""){
        choix1 = i;
      } 
      else if (cartes[choix1].textContent === cartes[i].textContent) {
        console.log('pair');
        cartes[choix1].style.backgroundColor = 'aqua';
        cartes[i].style.backgroundColor = 'aqua';
        choix1 = '';
      }
      else {   
        flag = true;
        setTimeout(() => {
          cartes[choix1].style.backgroundColor = 'black';
          cartes[i].style.backgroundColor = 'black';
          choix1 = '';
          flag = false;
        }, 1000);
      }
    }
  });
};
