// const img = document.createElement("img");
const ul = document.querySelector(".ul");
const btn =document.querySelector(".btn")


const ShowImg = ()=>{

fetch("https://xkcd.now.sh/?comic=latest")
.then(res => res.json())
.then(data =>{ 
    const newLi = document.createElement("li");
    newLi.innerHTML = `<img src='${data.img}'/>`
    ul.appendChild(newLi);
    })

.catch(er => console.log(er));
}

btn.addEventListener("click", ShowImg);