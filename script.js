'use strict';

let btn = document.createElement('button')
let btnCopy = document.createElement('button')
let para = document.createElement('p')
let paraCopy = document.createElement('p')
let container= document.createElement('div')

document.body.appendChild(btn)
document.body.appendChild(para)
document.body.appendChild(container)
document.body.appendChild(btnCopy)
document.body.appendChild(paraCopy)
container.appendChild(para)
container.appendChild(btnCopy)
btnCopy.style.visibility=`hidden`


btnCopy.append('copy the color')
btnCopy.classList.add('btnCopy')
container.classList.add('container')
btn.append('click On Me')
btn.classList.add('btn')

let randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
let CreateColor = () => `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(0, 255)})`

btn.addEventListener('click', () => {
    para.innerHTML=''
     paraCopy.innerHTML= ''
    let pickColor= CreateColor()
    btnCopy.style.visibility=`visible`
    document.body.style.backgroundColor =`${pickColor}`
    para.innerHTML=`the color is <strong>${pickColor}</strong> `
    btnCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(pickColor)
        paraCopy.innerHTML= 'the color has copied'
    })
})
