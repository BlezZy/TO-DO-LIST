"use stict";
const taskInput = document.querySelector('#add--task--input')
const plusBtn = document.querySelector(".plus--icon");
const container = document.querySelector('.container')

// const spanList = document.querySelectorAll(".tasks--todo");

plusBtn.addEventListener("click", function (){
    let taskValue=String(taskInput.value)
    let span = document.createElement('span')
    span.setAttribute('class', 'tasks--todo')
    let input = document.createElement('input')
    input.setAttribute('class', 'tasks--todo--ipnut')
    input.setAttribute('readonly', 'readonly')
    input.value=taskValue
    let pencil = document.createElement('i')
    pencil.setAttribute('class', 'fa-solid fa-pencil pencil--icon')
    let trash = document.createElement('i')
    trash.setAttribute('class', 'fa-solid fa-trash trash--icon')


    span.appendChild(input)
    span.appendChild(pencil)
    span.appendChild(trash)
    container.appendChild(span)

    taskInput.value = "";

    trash.addEventListener('click', function () {
        container.removeChild(span);
    });


    pencil.addEventListener("click", function (){
        input.removeAttribute('readonly');
        input.classList.toggle("strikethrough")
    });

});

document.querySelector('.trash--icon').forEach(trash=>{
    trash.addEventListener('click', function () {
        const  parent = this.parentElement
        container.removeChild(parent)
    })
})


