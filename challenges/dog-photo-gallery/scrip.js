const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById('btn2')
const ulEl = document.getElementById("ul");
const liEl = document.createElement('li');

const dogImg = () => {
fetch('https://dog.ceo/api/breeds/image/random')
  .then(res => res.json())
  .then(data => {
    liEl.innerHTML =`<img src='${data.message}'/>`;
    ulEl.appendChild(liEl);
  }) 
 .catch(er => console.log(er));
}; 

btn1.addEventListener('click',dogImg);

btn2.addEventListener('click',()=>
    ulEl.removeChild(liEl)
)