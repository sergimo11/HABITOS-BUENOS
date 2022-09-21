//llamados de html

const btnAgregar = document.getElementById("agregar");
btnAgregar.addEventListener("click", Agregar);
const lybe = document.querySelector("#background-all");
const esa = document.querySelector(".mensaje");
const cerrar = document.getElementById("cerrar");
const listo = document.getElementById("listo");
const ul = document.querySelector("ul");
const tareas = document.getElementById("tareas");
const text = document.getElementById("text");

//botones

cerrar.addEventListener("click", btnCerrar);

//funciones de agregar la clase background

function Agregar() {
  lybe.classList.add("active");
}

//funcion de la quitar la clase x

function btnCerrar() {
  lybe.classList.remove("active");
}

//funcion para agregar tareas al don
listo.addEventListener("click", aniar);

function aniar() {
  if (text.value.length == 0) {
    alert("ingresa texto");
  } else {
    lybe.classList.remove("active");

    const texts = text.value;
    const li = document.createElement("li");
    const p = document.createElement("p");

    li.classList.add("task", "roundborder");
    p.textContent = texts;

    //buen habito
      li.addEventListener("click", canbiar);

   
    li.appendChild(p);
    li.appendChild(deletebtn())
    ul.appendChild(li);
    text.value="";
  }
}


const canbiar = (event) => {
  event.target.classList.toggle("done");
 
};



//funcion de colorear habito bueno




const cabiarColor=document.getElementById('cabiarColor')
cabiarColor.addEventListener('click',black)



function black(){
  document.body.classList.toggle("bode")
}



function deletebtn(){
  const iten=document.createElement('button');
iten.textContent='x'
iten.className='btn-delete'


iten.addEventListener('click',(e)=>{
const intenso=e.target.parentElement;
ul.removeChild(intenso)
})
return iten
}