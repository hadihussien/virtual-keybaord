input=document.querySelector('textarea');
num=document.querySelectorAll('.num');
letter=document.querySelectorAll('.letter');
keyboard=document.querySelector('.keyboard');
button=document.querySelectorAll('button');
dlt=document.querySelector('.delete');
spc=document.querySelectorAll('.special-op')
caps=document.querySelector('.caps');
space=document.querySelector('.space');
right=document.querySelector('.right')
enter=document.querySelector('.enter');
document.addEventListener('click',(e) =>{
    for(i=0;i<button.length;i++){
        if(e.target == letter[i]){
            input.value += letter[i].innerText;
        }
        if(e.target == num[i]){
            input.value += num[i].innerText;
        }
        if(e.target == spc[i]){
            input.value += spc[i].innerText;
        }
    }
    input.focus();
})
dlt.addEventListener('mousedown',(e) =>{
    count=setInterval(erease,90);
})
dlt.addEventListener('mouseup',(e) =>{
    clearInterval(count);
}
)
function erease(){
    input.value = input.value.slice(0,input.value.length-1);
}
input.addEventListener('click', () => {
    keyboard.classList.toggle('active');
})
caps.addEventListener('click',() =>{
    caps.classList.toggle('active');
    if(caps.classList.contains("active")){
        for(i=0;i<letter.length;i++){
        letter[i]=letter[i].style.textTransform="capitalize"
        }
    }
    else{
        for(i=0;i<letter.length;i++){
            letter[i]=letter[i].style.textTransform="lowercase"
            }
    }
})
enter.addEventListener('click',(e) =>{
    input.value += '\n'
})
space.addEventListener('mousedown',(e) =>{
    count=setInterval(spacing,40);
})
space.addEventListener('mouseup',(e) =>{
    clearInterval(count);
})
function spacing(){
    input.value += ' ';
}
right.onclick = (e) =>{
    keyboard.classList.remove("active");
}



